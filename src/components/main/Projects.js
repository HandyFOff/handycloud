import React from 'react';
import Card from "./projectCard";
import cardsData from './projectsData'

export default function Projects() {

    const cardsElements = cardsData.map(
        (card) => <Card
            key={card.id}
            name={card.name}
            desc={card.desc}
            site={card.site}
            git={card.git}
        />
    );

    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <h1 className='projects__title'>PROJECTS</h1>
                <h4 className='projects__subtitle'>My projects of all time</h4>
                <div className='projects__content'>
                    {cardsElements}
                </div>
            </div>
        </section>
    )
}