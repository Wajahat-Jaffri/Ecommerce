import express from "express";
const router = express.Router();
import { checkAuthMiddleware } from "../../controller/auth.controller.js";


import { registerUser, login, logout } from "../../controller/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.get('/check-auth', checkAuthMiddleware, (req, res) => {
    const user = req.user
    res.status(200).json({ success: true, message: "User is authenticated", user })
})

export default router;