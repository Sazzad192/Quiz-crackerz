import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css'

const Category = (props) => {
    const {id,name,logo, total} = props.data;

    const navigate = useNavigate();
    const quizApi = () =>{
        navigate(`/quiz/${id}`);
    }
    
    return (  
        <div className="col">
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <b> Total quiz: {total}</b> </p>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={quizApi} className="quiz-btn btn btn-primary" type="button">Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Category;