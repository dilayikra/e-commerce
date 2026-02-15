import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchRoles } from '../store/actions/clientActions'; 
import axiosInstance from '../api/axios';

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  
  const roles = useSelector(state => state.client.roles);
  
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      role_id: "3", 
    },
  });

  const selectedRole = watch('role_id');

  
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError('');

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.store_name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }

    try {
      await axiosInstance.post('/signup', payload);
      alert('You need to click link in email to activate your account!');
      history.goBack();
    } catch (err) {
      setApiError(err.response?.data?.message || 'Signup failed. Please check your information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-10 py-20 max-w-xl font-montserrat">
      <h1 className="text-3xl font-bold mb-8 text-[#252B42]">Sign Up</h1>

      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* isim */}
        <div>
          <input
            {...register('name', { required: "Name is required", minLength: 3 })}
            placeholder="Name"
            className="border p-3 rounded w-full"
          />
          {errors.name && <span className="text-red-500 text-xs">Min 3 characters</span>}
        </div>

        {/* mail */}
        <div>
          <input
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address"
              }
            })}
            placeholder="Email"
            className="border p-3 rounded w-full"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        {/* şifre */}
        <div>
          <input
            type="password"
            {...register('password', {
              required: "Password is required",
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
            })}
            placeholder="Password"
            className="border p-3 rounded w-full"
          />
          {errors.password && (
            <span className="text-red-500 text-xs block">
              Min 8 chars, including numbers, lower, upper and special chars.
            </span>
          )}
        </div>

        {/* şifre onayı */}
        <div>
          <input
            type="password"
            {...register('confirmPassword', {
              required: "Please confirm your password",
              validate: (value) => value === watch('password') || "Passwords do not match",
            })}
            placeholder="Confirm Password"
            className="border p-3 rounded w-full"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* rol */}
        <div>
          <label className="text-sm font-bold text-[#737373]">Role</label>
          <select {...register('role_id')} className="border p-3 rounded w-full bg-white">
            {roles.map(role => (
              <option key={role.id} value={role.id.toString()}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        
        {selectedRole === "2" && (
          <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded border border-dashed border-[#23A6F0]">
            <h3 className="font-bold text-sm text-[#252B42]">Store Information</h3>
            <input
              {...register('store_name', { required: true, minLength: 3 })}
              placeholder="Store Name"
              className="border p-3 rounded w-full"
            />
            {errors.store_name && <span className="text-red-500 text-xs">Min 3 chars</span>}

            <input
              {...register('phone', {
                required: true,
                pattern: /^(\+90|0)?5\d{9}$/,
              })}
              placeholder="Store Phone (05xxxxxxxxx)"
              className="border p-3 rounded w-full"
            />
            
            <input
              {...register('tax_no', {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
              placeholder="Tax No (TXXXXVXXXXXX)"
              className="border p-3 rounded w-full"
            />

            <input
              {...register('bank_account', {
                required: true,
                minLength: 26 
              })}
              placeholder="IBAN"
              className="border p-3 rounded w-full"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !isValid}
          className={`py-4 rounded text-white font-bold transition-all shadow-md ${
            loading || !isValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#23A6F0] hover:bg-[#1b85c1]'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              Submitting...
            </span>
          ) : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;