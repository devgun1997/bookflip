import React from "react";
import NavLogo from "../Navbar/Components/NavLogo";
import NavItem from "../Navbar/Components/NavItem";

function Footer(){
  return (
    <>
      <div className={`flex flex-row h-24 pb-4 px-4`}>
        <div className={`basis-1/4`}>
          <NavLogo/>
        </div>
        <div className={`basis-1/2 content-center`}>
          <NavItem name="Support" link="#support"/>
          <NavItem name="Privacy Policy" link="#services"/>
          <NavItem name="Terms And Conditions" link="#terms_and_conditions"/>
        </div>
        <div className={`basis-1/4 content-center text-slate-300`}>
          <span>© 2024 <span className={`text-orange-500 text-bold`}>PageFlip</span>, All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}

export default Footer;