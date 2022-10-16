import React from "react";
import Burger from "../custom/burger/Burger";

export default function Header() {

    let [active, setActive] = React.useState(false);
    
    function show() {
        document.body.style.overflow = "hidden";
        setActive(true);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img className="logo__img" alt="logo" src={require('../assets/icons/logo.png')}/>
                    <span className="logo__name">HandyCloud</span>
                </div>
                {window.innerWidth <= 768 ? 
                <div className="header__burger" onClick={show}>
                    click me
                </div> : null}
                <Burger active={active} setActive={setActive}>
                    asdasda
                </Burger>
                <nav className="header__nav">
                    <a className="nav__item" href="#about">About</a>
                    <a className="nav__item" href="#projects">Projects</a>
                    <a className="nav__item" href="#footer">Footer</a>
                </nav>
            </div>
        </header>
    )
}