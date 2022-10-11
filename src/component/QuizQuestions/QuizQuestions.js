import React from 'react';
import Options from '../Options/Options';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid';
import './QuizQuestions.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizQuestions = (props) => {

    const {question, options, correctAnswer} = props.questions;
    
    const seeAns = () =>{
        toast.success(`Correct Ans: ${correctAnswer}`);
    }

    return (  
        <div className="col mx-auto">
            <div className="card">
                <div className='card-body-part'>
                    <div className='d-flex justify-content-end'>
                        <button className='eyebtn' onClick={seeAns}> <EyeIcon className="eye"/> </button>
                        <ToastContainer 
                        position="top-center"
                        autoClose={1500}
                        theme="dark"/>
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