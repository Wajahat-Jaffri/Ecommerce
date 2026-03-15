import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { registerFormControls } from "@/config";
import CommonForm from "@/components/common/Form";
import { registerUser } from "@/store/auth-slice";
import { UserPlus } from "lucide-react";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(form)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Account created!", {
          description: "Welcome to J.Store!",
        });
        navigate("/auth/login");
      } else {
        toast.error("Registration failed.");
      }
    });
  }

  return (
    <div className="w-full flex justify-center animate-in fade-in slide-in-from-right-8 duration-700">
      
      {/* Container: pt-24 is key to match Login page alignment */}
      <div className="w-full pt-10 pb-3  max-w-[400px] bg-white">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100 shadow-sm">
            <UserPlus size={22} className="text-indigo-600" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create <span className="text-indigo-600">Account</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium text-sm">
            Join us today and start your journey.
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-5">
          <CommonForm
            formData={form}
            setFormData={setForm}
            formControls={registerFormControls}
            onSubmit={onSubmit}
            buttonText="Create Account"
          />
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
              Quick Setup
            </span>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-slate-500 text-sm font-medium">
            Already a member? 
            <Link
              to="/auth/login"
              className="text-indigo-600 font-bold ml-2 hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;