import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container justify-content-around">
                <img className='logo navbar-brand' src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/stat'}>Statistic</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        // <div className='d-flex justify-content-around align-items-center'>
        //     

        //     <div>
        //         

        //         
        //     </div>
            
        // </div>
    );
};

export default Header;