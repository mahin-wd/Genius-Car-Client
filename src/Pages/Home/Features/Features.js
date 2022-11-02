import React from 'react';
import img1 from '../../../assets/icons/group.svg';
import img2 from '../../../assets/icons/Group 38729.svg';
import img3 from '../../../assets/icons/person.svg';
import img4 from '../../../assets/icons/Wrench.svg';
import img5 from '../../../assets/icons/check.svg';
import img6 from '../../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className="text-orange-600 text-xl font-bold">Core Features</p>
                <h1 className='text-5xl font-bold my-5'>Why choose us?</h1>
                <p>the majority have suffered alteration in some form, by injected humour,
                    <br />
                    or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-around my-20'>
                <div className='flex flex-col items-center p-5 border rounded-lg'>
                    <img src={img1} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold">Expert Team</h3>
                </div>

                <div className='flex flex-col items-center p-5 border rounded-lg bg-orange-600'>
                    <img src={img2} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold text-white">Timely Delivary</h3>
                </div>

                <div className='flex flex-col items-center p-5 border rounded-lg'>
                    <img src={img3} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold">24/7 Support</h3>
                </div>

                <div className='flex flex-col items-center p-5 border rounded-lg'>
                    <img src={img4} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold">Best Equipments</h3>
                </div>

                <div className='flex flex-col items-center p-5 border rounded-lg'>
                    <img src={img5} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold">100% Guranty</h3>
                </div>

                <div className='flex flex-col items-center p-5 border rounded-lg'>
                    <img src={img6} alt="" className='w-45 mb-2'/>
                    <h3 className="text-sm font-bold">Timely Delivary</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;