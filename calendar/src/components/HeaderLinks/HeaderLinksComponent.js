import React from "react";
import "./headerLinks.css";

export const HeaderLinks = () =>{
    return (
        <div className="header-links">
            <a href="/user/login">Login</a>
            <a href="/user/register">Register</a>
        </div>
    );
}