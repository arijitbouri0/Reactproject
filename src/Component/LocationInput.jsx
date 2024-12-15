import React from 'react';
import { MapPin, Edit2 } from 'lucide-react';

export function LocationInput() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Enter Your Location"
            className="text-gray-700 focus:outline-none text-lg"
          />
        </div>
        <Edit2 className="text-gray-500 cursor-pointer" size={18} />
      </div>
      <p className="text-gray-500 text-sm mt-2">
        Your location will help us serve better and extend a personalised experience.
      </p>
    </div>
  );
}