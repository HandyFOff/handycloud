import React from 'react';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <h1 className='hero__title'>WORK WITH</h1>
                <div className='hero__content'>
                    <div className='hero__framework framework'>
                        <h1 className='framework__title'>FRAMEWORK</h1>
                        <img className='framework__img' alt='react images' src={require('../../assets/images/react.png')}/>
                        <h1 className='framework__name'>REACT</h1>
                    </div>
                    <div className='hero__techsteck techsteck'>
                        <h1 className='techsteck__title'>TECH STECK</h1>
                        <div className='techsteck__imgs'>
                            <img className='techsteck__img' alt='js images' src={require('../../assets/images/js.png')}/>
                            <img className='techsteck__img' alt='css images' src={require('../../assets/images/css.png')}/>
                            <img className='techsteck__img' alt='html images' src={require('../../assets/images/html.png')}/>
                            <img className='techsteck__img' alt='git images' src={require('../../assets/images/git.png')}/>
                            <img className='techsteck__img' alt='webpack images' src={require('../../assets/images/webpack.png')}/>
                        </div>
                        <h1 className='techsteck__name'>AND OTHERS</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}