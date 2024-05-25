import React, { useState } from 'react';
import styles from "../Home/Home.module.css";
import Navbar from "../../Common/Components/Navbar";
import Footer from "../../Common/Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className={`${styles.home__main} h-screen`}>
      <Navbar />
      <div className={`w-full flex h-screen`}>
        <div className={`flex-1 bg-orange-500`}>

        </div>
        <div className={`flex-1 content-center justify-center`}>
          <div className={`w-[25rem] h-[35rem] bg-amber-900 m-auto`}>

          </div>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};

export default PrivacyPolicy;
