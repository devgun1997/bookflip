import React from "react";
import styles from './Login.module.css';
import Navbar from "../../Common/Components/Navbar";
import LoginCard from "../../Common/Components/LoginCard";
function Login()
{
 return (
     <>
         <div className={`h-dvh w-full bg-gray-900`}>
             <Navbar/>
             <LoginCard/>
         </div>
     </>
 )
}
export default Login