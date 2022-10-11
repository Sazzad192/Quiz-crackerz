import React from 'react';
import Header from '../Header/Header';
import './Error.css'

const Error = () => {
    return (
        
        <div>
            <Header></Header>
            <div className='body'>
                <h2>Ops!!!!!</h2>
                <h5>Page Not Found <span className='numb'>404</span></h5>
            </div>
        </div>
    );
};

export default Error;