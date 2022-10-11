import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './options.css'

const Options = (props) => {
    
    const warn = () =>{
        if(props.options !== props.ans){
            toast.warn(`This ans is wrong!`);
        }
        else{
            toast.success(`Right ans`);
        }
    }

    return (
        <div className='option'>
            <div className="form-check m-5">
                <input onClick={warn} className="form-check-input" type="radio" name="flexRadioDefault" id={props.options}/>
                <ToastContainer 
                        position="top-center"
                        autoClose={1500}
                        theme="dark"/>
                <label className="form-check-label"  htmlFor={props.options}>
                    {props.options}
                </label>
            </div>
        </div>
    );
};

export default Options;