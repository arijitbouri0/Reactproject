import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { SocialButtons } from './SocialButtons';

export function Login({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className="space-y-4">
        <div>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex justify-end">
          <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
            Forgot Password?
          </button>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>

      <SocialButtons />
      
      <p className="text-center mt-6 text-gray-600">
        Don't have an account yet?{' '}
        <button
          onClick={onSwitch}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Create new for free!
        </button>
      </p>
    </div>
  );
}