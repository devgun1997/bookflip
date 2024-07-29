import React from 'react';
import border from '../../../Assets/book-cover-border.png';

const BookView = ({ isStraightened, isEnlarged, isOpen }) => {
  return (
    <div className={`relative transition-transform duration-1000 ease-in-out ${isStraightened ? 'rotate-[348deg]' : 'rotate-12'} ${isEnlarged ? 'fixed transform -translate-x-1/5 -translate-y-1/5 scale-150 z-50' : ''} w-80 h-96 text-white rounded-lg shadow-md`}>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-tl-3xl transform rotate-12 translate-x-1 translate-y-1"></div>
      <div className="absolute top-0 left-0 w-full h-full border-8 border-amber-900 bg-amber-100 rounded-tl-3xl transform rotate-12 translate-x-4 translate-y-7"></div>
      <div className="absolute bottom-0 left-0 w-5 h-10 bg-amber-900 rounded-l-[5rem] transform -rotate-12 translate-x-1 -translate-y-2 -ml-9"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-amber-900 flex items-center justify-center transform rotate-12 translate-x-1 translate-y-1 rounded-tl-3xl">
        <span className="text-3xl">Privacy Policy</span>
      </div>
      <div className="absolute top-0 left-0 w-5/6 h-5/6 transform rotate-12 translate-x-8 translate-y-10">
        <img src={border} className="w-full h-full" alt="Book Border" />
      </div>
    </div>
  );
};

export default BookView;