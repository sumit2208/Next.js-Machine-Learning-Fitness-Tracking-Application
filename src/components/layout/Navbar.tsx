 
import React from 'react';

export const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h1 className="text-xl font-bold text-neutral-800">TaskFlow</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
         

         

        <div className="flex items-center space-x-3">
          <img 
            src="/api/placeholder/40/40" 
            alt="User" 
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <div>
            <div className="text-sm font-semibold text-neutral-800">John Doe</div>
            <div className="text-xs text-neutral-500">Fitness Enthusiast</div>
          </div>
        </div>
      </div>
    </header>
  );
};