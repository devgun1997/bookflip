import React from "react";
import styles from './Navbar.module.css';
import logo from '../../../Assets/logo.png';
import Navitem from "../Navitem";
import {AppRegistrationRounded, ContactMail, Home, Login} from "@mui/icons-material";
function Navbar () {
    return (
        <>
            <div className={`flex flex-row bg-gray-900 w-full h-20 backdrop-opacity-60 backdrop-blur-3xl`}>
                <div className={`w-1/5 h-full`}>
                    <img src={logo} className={`h-full w-full`}/>
                </div>
                <div className={`flex flex-row w-4/5 h-full justify-end p-2`}>
                    <Navitem icon={<Home className={`mr-2`}/>} name="Home" />
                    <Navitem icon={<ContactMail className={`mr-2`}/>} name="Contact Us" />
                    <Navitem icon={<AppRegistrationRounded className={`mr-2`}/>} name="Register" />
                    <Navitem icon={<Login className={`mr-2`}/>} name="Login" />
                </div>
            </div>
        </>
    );
}

export default Navbar