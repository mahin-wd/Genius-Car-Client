import React from 'react';
import About from '../About/About';
import Items from '../Car Items/Items';
import Contact from '../Contact Info/Contact';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Items></Items>
        <Team></Team>
        <Features></Features>
        </div>
    );
};

export default Home;