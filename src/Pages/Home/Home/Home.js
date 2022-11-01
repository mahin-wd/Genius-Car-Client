import React from 'react';
import About from '../About/About';
import Items from '../Car Items/Items';
import Contact from '../Contact Info/Contact';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Items></Items>
        </div>
    );
};

export default Home;