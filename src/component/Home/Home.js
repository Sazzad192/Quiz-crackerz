import React from 'react';
import backgroud from '../../img/banner.jpg'
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item d-flex flex-column h-100 align-items-center justify-content-center text-white  active">
                        <h1 className='py-5'>Select Your Favourite Quiz Topic</h1>

                        <h6 className=''>Topics: HTML, CSS, JavaScript, React, Node JS, Problem Solving</h6>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Home;