import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className="text-xl font-bold text-orange-600 mb-5">Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-xl mt-3">
                    the majority have suffered alteration in some form, by injected humour,
                <br />
                or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 mt-12'>
                {
                    services.map(service => <ServiceCard
                    key={service.name}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
        
    );
};

export default Services;