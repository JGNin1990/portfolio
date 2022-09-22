import React from 'react';
import PH from "../images/built.jpeg";
import Navbar from "./Navbar";
import {FaFacebookSquare,FaGithubSquare,FaTwitterSquare} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import {NavLink} from "react-router-dom";
import './Home.scss';
import Typed from "typed.js";

const Home = () => {

    const el = React.useRef(null);
    const typed = React.useRef(null);


    React.useEffect(() => {
        const options = {
            strings: [
                "Hello... I'm Moe Fadhlan" ,
                "Hello...I am Power Ranger",
                'We All Die Alone !'
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <>
            <section className='min-vh-100 s1'>
                <div className="container p-0">
                    <div className="d-flex mx-auto b-shadow aaa">
                        <div className="">
                            <img src={PH} className="built"/>
                        </div>
                        <div className=" s1-r1">
                            <Navbar/>
                            <div className="d-flex align-items-center">
                                <h1 className='slbo-font fw-bold my-auto' ref={el} ></h1>
                            </div>
                            <p className='text-black-50 lh-sm pt-3 mono-font mb-4  fp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae earum facere iure nam nulla optio possimus ratione sed veniam.</p>
                            <div className='mb-lg-5 mb-4'>
                                <NavLink to={'/contact'} className=''>
                                    <button className='for-con-btn'>Contact now...
                                        <span className='one'></span>
                                    </button>
                                </NavLink>
                            </div>

                            <div className="">
                                <a href="#"><FaGithubSquare className=' text-black-50 fs-3 fil'/></a>
                                <a href="#"><BsDiscord className='ms-4 text-black-50 fs-3 fil'/></a>
                                <a href="#"><FaTwitterSquare className='ms-4 text-black-50 fs-3 fil'/></a>
                                <a href="https://www.facebook.com/profile.php?id=100033329182212"><FaFacebookSquare className='ms-4 text-black-50 fs-3 fil'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;