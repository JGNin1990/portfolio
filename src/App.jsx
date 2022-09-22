import React from 'react';
import './App.scss';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import MyProjects from "./components/My-projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/myproject'} element={<MyProjects/>} />
                    <Route path={'/contact'} element={<Contact/>} />

                    <Route path={'*'} element={<Error/>} />
                </Routes>
            </Router>
        </>
    );
};

export default App;