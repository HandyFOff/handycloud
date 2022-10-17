import React from "react";
import Burger from "../custom/burger/Burger";

export default function Header() {

    let [active, setActive] = React.useState(false);
    
    function show() {
        document.body.style.overflow = "hidden";
        setActive(true);
    }

    function close() {
        document.body.style.overflow = "auto"
        setActive(false)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img className="logo__img" alt="logo" src={require('../assets/icons/logo.png')}/>
                    <span className="logo__name">HandyCloud</span>
                </div>
                <div className="header__burger" onClick={show}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Burger active={active} setActive={setActive}>
                    <nav className="burger__nav nav">
                        <a className="nav__item" href="#about" onClick={close}>About</a>
                        <a className="nav__item" href="#projects" onClick={close}>Projects</a>
                        <a className="nav__item" href="#footer" onClick={close}>Contacts</a>
                    </nav>
                </Burger>
                <nav className="header__nav">
                    <a className="nav__item" href="#about">About</a>
                    <a className="nav__item" href="#projects">Projects</a>
                    <a className="nav__item" href="#footer">Contacts</a>
                </nav>
            </div>
        </header>
    )
}