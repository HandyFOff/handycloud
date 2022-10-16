import React from "react";
import './preloader.scss'

export default function PreLoader() {

    setTimeout(() => {
        document.querySelector('.preloader').style.display = "none";
    }, 5000);

    setTimeout(() => {   
        document.body.style.overflow = "auto";
    }, 4500);

    return (
        <div className="preloader">
            <h1 className="preloader__name">HandyCloud</h1>
        </div>
    )
}