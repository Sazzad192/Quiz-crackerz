import React from 'react';
import './options.css'

const Options = (props) => {
    return (
        <div className='option'>
            <div className="form-check m-5">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label"  htmlFor="flexRadioDefault1">
                    {props.options}
                </label>
            </div>
        </div>
    );
};

export default Options;