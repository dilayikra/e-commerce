import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../store/actions/clientActions'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    
    console.log("Giriş denemesi başlatıldı:", data);
    
    
    dispatch(loginUser(data, history)); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 bg-[#FAFAFA] font-montserrat">
      <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-lg border border-[#ECECEC]">
        <h2 className="text-[#252B42] text-3xl font-bold text-center mb-8">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="customer@commerce.com"
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
              })}
              className="w-full px-4 py-3 border border-[#ECECEC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>}
          </div>

          {/* Şifre */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-2">Password</label>
            <input
              type="password"
              placeholder="******"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border border-[#ECECEC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 font-bold">{errors.password.message}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="h-4 w-4 text-[#23A6F0] focus:ring-[#23A6F0] border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm font-bold text-[#737373]">
              Remember Me
            </label>
          </div>

          
          <button
            type="submit"
            className="w-full py-4 text-white bg-[#23A6F0] rounded-md font-bold text-sm hover:bg-[#1a7bb3] transition-all"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-[#737373] text-sm font-bold">
          Don't have an account? <span className="text-[#23A6F0] cursor-pointer hover:underline" onClick={() => history.push('/signup')}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
