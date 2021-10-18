import React, { Component } from 'react';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
import '../../App.css';
import logoImage from '../../assets/small/Lia-Header-text.png';
import { MenuItems } from './MenuItems';

class Nav extends Component {

    render (){
        return (
            <header>
                <div>
                    <a data-testid="link" href="/">
                        <img src={logoImage} className="my-2" style={{ width: "50%" }} alt="Home" />
                    </a>
                </div>
                <nav>
                    
                    <ul>
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