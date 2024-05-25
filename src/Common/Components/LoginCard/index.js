import React from "react";
import {Spa} from "@mui/icons-material";

function LoginCard() {
    return (
        <>
            <div className={`flex backdrop-blur items-center justify-center backdrop-opacity-70 h-[80%]`}>
                <div className={`flex relative bg-cyan-700 h-2/3 w-[30%] flex-col justify-center items-center rounded-lg`}>
                    <div className={`absolute flex items-center flex-col justify-center h-1/3 w-4/5 top-[-10%] bg-emerald-400 rounded-lg`}>
                        <span className={`font-extrabold font-serif text-2xl`}>LOG IN</span>
                        <span className={`font-mono text-sm`}>Enter your login credentials:</span>
                    </div>
                    <div className={`h-2/3 w-full`}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginCard