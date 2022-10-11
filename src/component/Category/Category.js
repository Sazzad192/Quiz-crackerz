import React from 'react';
import './Category.css'

const Category = (props) => {
    const {handelCard} = props
    const {name,logo, total} = props.data;
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
                    <button onClick={() => handelCard(props.data)} className="quiz-btn btn btn-primary" type="button">Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Category;