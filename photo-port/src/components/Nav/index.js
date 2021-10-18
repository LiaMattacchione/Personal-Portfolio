import React, { Component } from 'react';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
import '../../App.css';
import logoImage from '../../assets/small/Lia-Header-text.png';
import { MenuItems } from './MenuItems';

class Nav extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render (){
        return (
            <header>
                <div>
                    <a data-testid="link" href="/">
                        <img src={logoImage} className="my-2" style={{ width: "50%" }} alt="Home" />
                    </a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <nav>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li> 
                            )
                        })}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Nav;