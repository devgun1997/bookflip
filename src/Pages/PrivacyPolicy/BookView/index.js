// src/components/Book.js
import React from 'react';

const BookView = () => {
  return (
    <div className="relative w-64 h-96 bg-red-800 text-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 w-full h-full transform -rotate-3 -translate-x-1 translate-y-1 border-4 border-white"></div>
      <div className="absolute top-0 left-0 w-full h-full transform rotate-3 translate-x-1 -translate-y-1 border-4 border-white"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-3xl">Book Title</span>
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <div className="bg-yellow-400 h-1 w-8"></div>
      </div>
    </div>
  );
};

export default BookView;
