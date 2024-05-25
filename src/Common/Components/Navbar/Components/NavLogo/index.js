import React from "react";
import styles from "./NavLogo.module.css";
import logo from "../../../../../Assets/logo-bg.png";
function NavLogo(){
    return (
        <>
            <div className={`h-full overflow-hidden`}>
                <img className={'h-full'} src={logo} alt="logo"/>
            </div>
        </>
    );
}

export default NavLogo;