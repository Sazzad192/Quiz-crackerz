import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
    const quizQuestions = useLoaderData().data.questions;
    return (
        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                {
                    quizQuestions.map(element => <QuizQuestions
                    key={element.id}
                    questions={element}>
                    </QuizQuestions> )
                }
            </div>
        </div>
    );
};

export default Quiz;