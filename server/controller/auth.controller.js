import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error registering user",
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.cookie("token",token,{
      httpOnly: true,
      secure:false,
      sameSite:"lax",
    })
  .status(200).json({
    success: true,
    message: "Login successful",
    user:{
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }    
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGOUT
const logout = async (req, res) => {
  try {

    res.clearCookie("token");

    res.status(200).json({
      success:true,
      message: "Logout successful",
    });

  } catch (error) {
    console.log(error);
  }
};

export const checkAuthMiddleware = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res
            .status(400)
            .json({ success: false, message: "Unautherized " });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).json({ success: false, message: "Unautherized " });
    }
}

export { registerUser, login, logout };