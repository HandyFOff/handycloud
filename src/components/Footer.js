import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>CONTACTS</h1>
            <nav className="footer__nav nav">
                    <a className="nav__item" href="#about">About</a>
                    <a className="nav__item" href="#projects">Projects</a>
                    <a className="nav__item" href="#footer">Footer</a>
            </nav>
            <div className='socialmedia'>
                <a href='' target="_blank"><img className='socialmedia__img' alt='facebook' src={require('../assets/icons/facebook.png')}/></a>
                <a href='https://t.me/handyfz' target="_blank"><img className='socialmedia__img' alt='telegram' src={require('../assets/icons/telegram.png')}/></a>
                <a href='' target="_blank"><img className='socialmedia__img' alt='instagram' src={require('../assets/icons/instagram.png')}/></a>
                <a href='https://github.com/HandyFOff' target="_blank"><img className='socialmedia__img' alt='github' src={require('../assets/icons/github.png')}/></a>
            </div>
            <span className='rights'><b>© 2022. HandyCloud.</b> All right resertved</span>
        </footer>
    )
}