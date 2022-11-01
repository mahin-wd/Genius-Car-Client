import React, { useEffect, useState } from 'react';
import ProCard from '../../../Product Card/ProCard';

const Items = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='text-center my-20'>
            <p className="text-sm text-orange-600 font-bold">Popular Products</p>
            <h1 className='text-5xl text-black font-bold my-5'>Browse Our Products</h1>
            <p className="text-gray-400 mb-10">the majority have suffered alteration in some form,
            <br />
            by injected humour, or randomised words which don't look even slightly believable. </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <ProCard
                    key={product.id}
                        product={product}
                    >
                    </ProCard>)
                }
            </div>
            <div className='text-center mt-10 mb-20'>
                <button className="btn btn-outline btn-error">More Products</button>
            </div>
        </div>
    );
};

export default Items;