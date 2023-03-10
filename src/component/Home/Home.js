import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import './Home.css'


const Home = () => {
    const quizData = useLoaderData().data;
    
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item d-flex flex-column h-100 align-items-center justify-content-center text-white  active">
                        <h1 className='py-5'>Select Your Favourite Quiz Topic</h1>

                        <h6>Topics: HTML, CSS, JavaScript, React, Node JS, Problem Solving</h6>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        quizData.map(element => <Category
                        key={element.id}
                        data = {element}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;