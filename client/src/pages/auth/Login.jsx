import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { loginFormControls } from "@/config";
import CommonForm from "@/components/common/Form";
import { loginUser } from "@/store/auth-slice";
import { Lock } from "lucide-react"; // Changed icon for a more secure/premium feel

const initialState = {
  email: "",
  password: "",
};

function Authlogin() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(form)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Welcome back!", {
          description: "Access granted to your premium dashboard.",
        });
        navigate("/shop/home");
      } else {
        toast.error("Authentication Failed", {
          description: "Please check your credentials and try again.",
        });
      }
    });
  }

  return (
    <div className="w-full  flex justify-center animate-in fade-in zoom-in-95 duration-500">
      
      <div className="w-full max-w-[440px] bg-white p-12">
        
        {/* Top Branding Section */}
        <div className="mb-10">
          <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
            <Lock size={22} className="text-indigo-600" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign in to <span className="text-indigo-600">J.Store</span>
          </h2>
          <p className="text-slate-500 mt-3 font-medium">
            Enter your details to access your account.
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <CommonForm
            formData={form}
            setFormData={setForm}
            formControls={loginFormControls}
            onSubmit={onSubmit}
            buttonText="Sign In"
            // Make sure your CommonForm button uses: 
            // className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-slate-200"
          />
        </div>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-medium tracking-widest">
              Secure Access
            </span>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-slate-500 font-medium">
            New to our platform? 
            <Link
              to="/auth/register"
              className="text-indigo-600 font-bold ml-2 hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Create an account
            </Link>
          </p>
        </div>
        
      </div>

    </div>
  );
}

export default Authlogin;