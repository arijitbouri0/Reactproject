import React from 'react';

export function SocialButtons() {
  return (
    <div className="mt-6 space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or sign in with</span>
        </div>
      </div>

      <button className="w-full border border-gray-300 py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span>Sign in with Google</span>
      </button>

      <button className="w-full border border-gray-300 py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
}