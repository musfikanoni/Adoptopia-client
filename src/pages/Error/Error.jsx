import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src={error} className=' max-w-max' alt="" />
                
            </div>
            <div className="flex justify-center">
                <Link to="/">
                    <button className='bg-pcolor my-5 py-2 px-5 rounded-xl font-semibold text-white'>Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;