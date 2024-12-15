import React from 'react';



export function GroupCard({ name, image }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-medium text-gray-800">{name}</span>
      </div>
      <button className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
        Follow
      </button>
    </div>
  );
}