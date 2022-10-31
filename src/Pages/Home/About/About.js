import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-40">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
        <img src={person} alt='' className="rounded-lg w-4/5 h-full shadow-2xl" />
        <img src={parts} alt='' className="border-8 absolute right-5 top-1/2 w-3/4 max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-orange-600 text-xl font-bold mb-5'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified 
      <br /> & of experience
      <br />
       in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-error bg-orange-600 text-white mt-10">Get More Info</button>
    </div>
  </div>
</div>
    );
};
 
export default About;