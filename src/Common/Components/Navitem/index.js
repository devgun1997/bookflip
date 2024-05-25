import React from "react";
import styles from './Navitem.module.css'
function Navitem({icon,name}) {


    return (
        <>
            <div className="navitem__wrapper flex justify-center">
                <div className={`navitem__content flex h-full text-white font-semibold hover:backdrop-blur-none`}>
                    {icon}
                    <span className={`uppercase`}>
                        {name}
                    </span>
                </div>
            </div>

        </>
    );
}

export default Navitem