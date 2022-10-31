import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, service_id, title, img, price, description} = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <p className="text-xl text-orange-600 font-bold">Price: ${price}</p>
                        <button>
                            <FaArrowRight className='text-orange-600 text-xl' />
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;