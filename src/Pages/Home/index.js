import React from "react";
import styles from './Home.module.css';
import Navbar from "../../Common/Components/Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ContactSection from "../../Common/Components/ContactSection";
import Footer from "../../Common/Components/Footer";
import PricingSection from "./PricingSection";
function Home (){
  return (
    <>
      <div className={styles.home__main}>
        <Navbar />
        <HeroSection />
        <div className={`flex p-14 mt-8 text-left items-center`}>
          <div className={`flex-1 text-6xl text-bold text-white`}>
            <h1>Why <span className={`text-orange-500 text-bold`}>PageFlip</span> Is The Best Choice?</h1>
          </div>
          <div className={`flex-1 text-slate-300`}>
            <h1>No technical skills required. Our platform is designed for ease of use. Interactive books keep your audience engaged longer. Give your PDFs a polished and modern look. Flexible pricing plans to suit businesses of all sizes.</h1>
          </div>
        </div>
        <FeaturesSection />
        <div className={`p-14`}>
          <PricingSection />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default Home