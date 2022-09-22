import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white nav-bar w-100" style={{zIndex:999}}>
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto "  type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll justify-content-evenly w-100">

                                <NavLink to={'/'} className=' nav-item fw-bold fl'>Home</NavLink>

                                <NavLink to={'/about'} className='nav-item fw-bold fl '>About me</NavLink>

                                <NavLink to={'/myproject'} className='nav-item fw-bold fl '>My projects</NavLink>

                                <NavLink to={'/contact'} className='nav-item fw-bold fl '>Contact me</NavLink>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;