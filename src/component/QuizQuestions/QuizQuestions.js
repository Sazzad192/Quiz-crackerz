import React from 'react';
import Options from '../Options/Options';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid';
import './QuizQuestions.css'

const QuizQuestions = (props) => {

    const {question, options, correctAnswer} = props.questions;
    console.log(correctAnswer)
    // const singleOption = options.map(element => element);
    // console.log(singleOption)

    return (
        
            
                <div className="col mx-auto">
                    <div className="card">
                        <div className='card-body-part'>
                            <div className='d-flex justify-content-end'>
                            <EyeIcon className="eye"/>
                            </div>
                            <h5 className="card-title"> <b>Q. {question}</b></h5>
                            {
                                options.map(element => <Options
                                options={element}></Options> )
                            }
                        </div>
                    </div>
                </div>
    );
};

export default QuizQuestions;