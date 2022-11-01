import React from 'react';
import { FaStar } from "react-icons/fa";

const ProCard = ({product}) => {
    const {name,img, price, ratings} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-3">
            <figure>
                <img src={img} alt="Image" className='bg-gray-100 rounded-lg' />
                </figure>
            <div className="card-body">
                <p className='flex justify-center text-yellow-400'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </p>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-red-500 font-bold">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProCard;