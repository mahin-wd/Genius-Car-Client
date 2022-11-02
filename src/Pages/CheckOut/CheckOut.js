import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth Provider/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const {_id, title, img, price} = service;

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'Email Not Found';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            name: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
    }

    return (
        <div>
            <h4 className="text-3xl text-center">Yur are about to order our {title} service</h4>
            <form onSubmit={handleOrder} className='my-5 border rounded-lg p-10 bg-gray-100'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                    <input type="text" name="first" placeholder="First Name" className="input w-full" />
                    <input type="text" name="last" placeholder="Last Name" className="input w-full" />
                    <input type="text" name="phone" placeholder="Phone" className="input w-full" />
                    <input type="email" name="email" placeholder="Email" className="input w-full" value={user?.email} readOnly/>
                </div>
                    <textarea name="message" className="textarea w-full h-40" placeholder="Your Message..."></textarea>
                    <input className='btn bg-orange-600 border-none w-full my-5' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;