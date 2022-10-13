import React from 'react';

export default function About() {
    return (
        <section className='about'>
            <div className='container'>
                <div className='about-top'>
                    <h1 className='about__title'>ABOUT</h1>
                    <h4 className='about__subtitle'>Few words about myself</h4>
                </div>
                <div className='about__info info'>
                    <div className='info-left'>
                        <h1 className='info__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus</h1>
                        <p className='info__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus voluptas itaque deserunt veritatis voluptatibus.</p>
                        <div className='info__buttons'>
                            <a href='https://github.com/HandyFOff' target="_blank">
                                <button className='info__button btn-github'>
                                    GITHUB
                                </button>
                            </a>
                            <a href='https://www.youtube.com/channel/UC1o9A6jF9W1WGWowL99pQ2g' target="_blank">
                                <button className='info__button btn-youtube'>
                                    YOUTUBE
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='info-right'>
                        <img className='info__img' alt="handyf's work example" src={require('../../assets/images/about.png')}/>
                        <span>(work example)</span>
                    </div>
                </div>
            </div>
        </section>
    )
}