import React from 'react';
import PH from "../src/images/built.jpeg";

const Home = () => {
    return (
        <>
            <section className='min-vh-100 s1'>
                <div className="container p-0">
                    <div className="d-flex mx-auto b-shadow aaa">
                        <div className="">
                            <img src={PH} className="built"/>
                        </div>
                        <div className=" s1-r1">
                            <h1>Hello... I'm Moe</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae earum facere iure nam nulla optio possimus ratione sed veniam.</p>
                            <div>
                                <button className='btn btn-primary'>Contact Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;