import React from 'react';

export default function projectCard(props) {
    return (
        <div className='card'>
            <h1 className='card__title'>{props.name}</h1>
            <p className='card__desc'>{props.desc}</p>
            <div className='card__buttons'>
                <a href={props.git} target="_blank"><button className='card__button btn-github'>GITHUB</button></a>
                <a href={props.site} target="_blank"><button className='card__button btn-youtube'>SITE</button></a>
            </div>
        </div>
    )
}