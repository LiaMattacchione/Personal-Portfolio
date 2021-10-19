import React, { Component } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import logoImage from '../../assets/small/Lia-Header-text.png';
import { Navbar,Nav } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import PortfolioItems from '../Portfolio/PortfolioItems';
import '../../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function NavBar(profile) {
    const {PortfolioItems} = profile;

        return (
            <Router>
                <div class="navBarImage">
                    <Navbar expand="lg" sticky="top">
                        <Navbar.Brand as={ Link } to={"/"}>
                            <img src={logoImage} className="d-inline-block align-top" style={{ width: "50%" }} alt="Home" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll variant="tabs" defaultActiveKey="/about">
                                <Nav.Item>
                                    <Nav.Link as={ Link } to={"/about"}>About Me</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={ Link } to={"/portfolio"}>Portfolio</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={ Link } to={"/resume"}>Resume</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={ Link } to={"/contact"}>Contact Me</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div class="typewriterContainer">
                    <h2>
                        <Typewriter 
                            options={{
                                strings: ['Merging my passion for healthcare with coding.'],
                                autoStart: true,
                                loop: true,
                            }}                
                        />
                    </h2>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio PortfolioItems={PortfolioItems}/>
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}
export default NavBar;