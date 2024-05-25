import React from "react";
import styles from "./NavItem.module.css";

function NavItem ({name,link}) {
    return (
        <>
            <span className={`mr-8 text-slate-300 hover:text-orange-500 hover:font-bold hover:text-lg`}>
                <a href={link}>
                    {name}
                </a>
            </span>
        </>
    );
}

export default NavItem;