import React from 'react';

const Contact = () => {
    return (
        <footer data-theme="night" className="footer p-10 text-base-content rounded-lg my-20 text-center">
            <div className='flex items-center justify-around py-10'>
                <div>
                    <p className=' text-gray-400'>We are Open monday-friday</p>
                    <h3 className='text-2xl text-white font-bold'>7:00am - 9:00 pm</h3>
                </div>

                <div>
                    <p className="text-gray-400">Have a question?</p>
                    <h3 className="text-2xl text-white font-bold">+0250-5021-2222</h3>
                </div>

                <div>
                    <p className="text-gray-400">Need a repair? Our address</p>
                    <h3 className="text-2xl text-white font-bold">Liza Street, New York</h3>
                </div>
            </div>
        </footer>
    );
};

export default Contact;