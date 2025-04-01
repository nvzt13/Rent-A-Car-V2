"use client";
import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#1a1d24]">
      <div className="relative">
        {/* Car SVG with animation */}
        <div className="animate-drive">
          <svg 
            width="100" 
            height="50" 
            viewBox="0 0 100 50" 
            fill="none" 
            className="text-[#C4A484]"
          >
            <path 
              d="M85 32H75L70 22H35L30 32H15C13.8954 32 13 32.8954 13 34V38C13 39.1046 13.8954 40 15 40H20C20 43.866 23.134 47 27 47C30.866 47 34 43.866 34 40H66C66 43.866 69.134 47 73 47C76.866 47 80 43.866 80 40H85C86.1046 40 87 39.1046 87 38V34C87 32.8954 86.1046 32 85 32Z" 
              fill="currentColor"
            />
            <path 
              d="M27 45C29.7614 45 32 42.7614 32 40C32 37.2386 29.7614 35 27 35C24.2386 35 22 37.2386 22 40C22 42.7614 24.2386 45 27 45Z" 
              fill="#1a1d24"
            />
            <path 
              d="M73 45C75.7614 45 78 42.7614 78 40C78 37.2386 75.7614 35 73 35C70.2386 35 68 37.2386 68 40C68 42.7614 70.2386 45 73 45Z" 
              fill="#1a1d24"
            />
          </svg>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center mt-4">
          <span className="text-[#C4A484] text-xl animate-loading">Loading</span>
          <span className="text-[#C4A484] animate-ellipsis">.</span>
          <span className="text-[#C4A484] animate-ellipsis animation-delay-300">.</span>
          <span className="text-[#C4A484] animate-ellipsis animation-delay-600">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;