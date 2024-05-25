import React from "react";
import heroImg from "../../../Assets/hero-bg.png";
import heroRectangle from "../../../Assets/hero-rectangle.png";
import vector1 from "../../../Assets/Vector1.png";
import vector2 from "../../../Assets/vector2.png";
import vector3 from "../../../Assets/vector3.png";
import add from "../../../Assets/add.png";
import {CallMade} from "@mui/icons-material";
function HeroSection () {
  return (
    <>
      <div className={`flex flex-row p-14 h-[32rem]`}>
        <div className={`flex-1 text-white text-left`}>
          <h1 className={`text-7xl`}>
            Transform Your PDFs into Stunning Book Like Views
          </h1>
          <p className={`text-slate-300 mt-4`}>
            <span className={`text-orange-500 text-bold`}>PageFlip</span> is an innovative SaaS solution designed to bring your static PDF files to life. With <span className={`text-orange-500 text-bold`}>PageFlip</span>, you can easily convert your PDFs into interactive, book-like views that captivate and engage your audience. Whether you're showcasing a portfolio, publishing an eBook, or sharing reports and brochures, <span className={`text-orange-500 text-bold`}>PageFlip</span> makes your documents look professional and dynamic.
          </p>
          <button className={`text-white mt-12 rounded bg-orange-500 p-3 border-b-white border-2 hover:bg-black text-sm`} > Key Features <CallMade/></button>
        </div>
        <div className={`flex-1 relative align-middle`}>
          <div className={`w-18 h-6 absolute top-0 left-0`}>
            <img className={`w-full h-full`} src={vector1} alt="vector1"/>
          </div>
          <div className={`w-18 h-12 absolute top-0 right-2`}>
            <img className={`w-full h-full`} src={vector2} alt="vector2"/>
          </div>
          <div className={`w-full h-full bg-transparent absolute flex items-center justify-center`}>
            <img className={`h-full w-5/5`} src={heroRectangle} alt="hero section image"/>
          </div>
          <div className={`w-full h-full bg-transparent absolute flex items-center justify-center`}>
            <img className={`h-[32rem] w-[32rem] -mt-7 ml-4 `} src={heroImg} alt="hero section image"/>
          </div>
          <div className={`w-18 h-24 absolute bottom-0 left-0`}>
            <img className={`w-full h-full`} src={vector3} alt="vector3"/>
          </div>
          <div className={`w-18 h-12 absolute bottom-0 right-2`}>
            <img className={`w-full h-full`} src={add} alt="add"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;