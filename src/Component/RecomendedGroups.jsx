import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { GroupCard } from './GroupCard';
import { LocationInput } from './LocationInput';

const groups = [
  {
    id: 1,
    name: 'Leisure',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Activism',
    image: 'https://images.unsplash.com/photo-1529171374461-2ea966dee0f5?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'MBA',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=150&h=150&fit=crop'
  }
];

export function RecommendedGroups() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <LocationInput />
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <ThumbsUp className="text-gray-700" size={20} />
          <h2 className="text-lg font-semibold">RECOMMENDED GROUPS</h2>
        </div>
        
        <div className="divide-y">
          {groups.map(group => (
            <GroupCard
              key={group.id}
              name={group.name}
              image={group.image}
            />
          ))}
        </div>
      </div>
      
      <button className="w-full text-blue-500 hover:text-blue-600 text-center">
        See More...
      </button>
    </div>
  );
}