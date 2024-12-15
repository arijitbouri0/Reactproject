import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Login } from './Login';
import {SignUp} from './SignUp'

export function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-center text-green-600 text-sm mb-6">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘
          </p>
          
          {isLogin ? 
            <Login onSwitch={() => setIsLogin(false)} /> : 
            <SignUp onSwitch={() => setIsLogin(true)} />
          }
        </div>
      </div>
    </div>
  );
}