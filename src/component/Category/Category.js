import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = (props) => {
    const {handelCard} = props;
    const {id,name,logo, total} = props.data;
    // console.log(name)
    return (
            
        <div className="col">
            <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <b> Total quiz: {total}</b> </p>
                </div>
                <div class="d-grid gap-2">
                    <Link to={`/quiz/${id}`}>
                        <button className="quiz-btn btn btn-primary" type="button">Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;