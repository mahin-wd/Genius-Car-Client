import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa';

const Member = ({member}) => {
    const {name, job, img} = member;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold ">{name}</h2>
                <p className="text-gray-700">{job}</p>
                <div className="card-actions flex text-2xl">
                    <FaLinkedin />
                    <FaTwitter />
                    <FaFacebook />
                </div>
            </div>
        </div>
    );
};

export default Member;