import React from 'react';
import About from './main/About';
import Hero from './main/Hero';
import Projects from './main/Projects';

export default function Main() {
    return (
        <main className='main'>
            <About/>
            <Hero/>
            <Projects/>
        </main>
    )
}