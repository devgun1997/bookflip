import React from "react";
import styles from "./Navbar.module.css";
import NavLogo from "./Components/NavLogo";
import NavItem from "./Components/NavItem";

function Navbar(){
    return (
        <>
            <div className={`flex flex-row h-24 `}>
                <div className={`basis-1/4 m-3`}>
                    <NavLogo />
                </div>
                <div className={`basis-1/2 content-center`}>
                    <NavItem name="Home" link="#home" />
                    <NavItem name="Key Features" link="#features" />
                    <NavItem name="About Us" link="#about_us" />
                </div>
                <div className={`basis-1/4 content-center`}>
                    <button className={`text-white border-2 border-b-white rounded p-2 hover:bg-amber-600 hover:font-bold`}> Contact Us </button>
                </div>
            </div>
        </>
    );
}

export default Navbar