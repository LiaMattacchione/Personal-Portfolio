import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';

class Footer extends Component {

    render() {
        return (
            <div class="footerNavbar">
                <Navbar className="justify-content-center">
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/lia-mattacchione-863a75120/" target="_blank" className="fab fa-linkedin-in fa-2x"></Nav.Link>
                        <Nav.Link href="https://twitter.com/LiaMattacchione" target="_blank" className="fab fa-twitter fa-2x"></Nav.Link>
                        <Nav.Link href="https://github.com/LiaMattacchione" target="_blank" className="fab fa-github fa-2x"></Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Footer;