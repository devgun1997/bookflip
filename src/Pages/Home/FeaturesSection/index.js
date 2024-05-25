import React from "react";
import icon1 from "..//../../Assets/Icon1.png";
import icon2 from "..//../../Assets/Icon2.png";
import icon3 from "..//../../Assets/Icon3.png";
import icon4 from "..//../../Assets/Icon4.png";
import icon5 from "..//../../Assets/Icon5.png";
import icon6 from "..//../../Assets/Icon6.png";
import FeatureItem from "./Components/FeatureItem";
import vector3 from "../../../Assets/vector3.png"
import vector2 from "../../../Assets/vector2.png"
function FeaturesSection () {
  return (
    <>
      <div className={`relative p-14 flex text-white content-center items-center`} id={'features'}>
        <img className={`left-0 h-16 w-16 ml-8`} src={vector3} alt="vector3"/>
        <h1 className={`text-bold text-6xl m-auto`}>
          Key Features of <br/><span className={`text-orange-500`}> PageFlip </span>
        </h1>
        <img className={`left-0 h-12 w-12 mr-8`} src={vector2} alt="vector2"/>
      </div>
      <div className={`flex px-14 justify-center items-center content-center`}>
      <FeatureItem image={icon1} name="Interactive Page Turning"
                     desc="Enjoy the feel of flipping through pages like a physical book with PageFlip's intuitive interface for seamless navigation."/>
        <FeatureItem image={icon2} name="Easy PDF Upload"
                     desc="Simply upload your PDF files, and PageFlip will handle the rest. Our platform automatically converts your PDFs into beautiful, interactive books."/>
        <FeatureItem image={icon3} name="Seamless Integration"
                     desc="Easily embed your interactive book on any website using PageFlip's simple link or seamless embed code."/>
      </div>
      <div className={`flex px-14 justify-center items-center content-center`}>
        <FeatureItem image={icon4} name="Customizable Viewer"
                     desc="Customize your book viewer to match your brand with PageFlip. Adjust colors, backgrounds, and more for a professional appearance."/>
        <FeatureItem image={icon5} name="Mobile Friendly"
                     desc="Your interactive books will look great on any device with PageFlip's responsive design, ensuring a smooth experience on desktop, tablet, and mobile."/>
        <FeatureItem image={icon6} name="Fast and Secure"
                     desc="PageFlip's platform is optimized for performance and security, guaranteeing fast loading times and content protection."/>
      </div>

    </>
  );
}

export default FeaturesSection;