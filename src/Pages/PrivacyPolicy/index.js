import React, { useState } from 'react';
import styles from "../Home/Home.module.css";
import Navbar from "../../Common/Components/Navbar";
import BookView from "./BookView";
import Footer from "../../Common/Components/Footer";

const PrivacyPolicy = () => {
  const [isStraightened, setIsStraightened] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMore = () => {
    setIsStraightened(true);
    setTimeout(() => {
      setIsEnlarged(true);
    }, 1000); // Time for straightening animation

    setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Time for enlarging animation
  };

  return (
    <div className={`${styles.home__main} h-screen`}>
      <Navbar />
      <div className="w-full flex min-h-fit">
        <div className="relative flex-1 main-block">
          <div className="absolute w-full h-full bg-[#19191B] top-main-back ml-4">
            <div className="text-white text-left flex-row align-middle">
              <div className="font-bold text-9xl m-auto mt-16">
                <div>PRIVACY</div>
                <div className="text-center text-amber-600">POLICY</div>
              </div>
              <p className="flex-row flex-1 mt-10 mb-16 text-lg">
                At PageFlip, we prioritize your privacy. We collect minimal personal information to provide and improve our services, and we implement strong security measures to protect your data. We do not share your information with third parties except as necessary to provide our services or comply with legal obligations. For any concerns, contact us at privacy@pageflip.com.
              </p>
              <button onClick={handleReadMore} className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
                Read More...
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 content-center justify-center">
          <div className="flex items-center justify-center min-h-screen -mt-24">
            <BookView isStraightened={isStraightened} isEnlarged={isEnlarged} isOpen={isOpen} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;