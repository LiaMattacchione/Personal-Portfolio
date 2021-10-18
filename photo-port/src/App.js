import React, { Component } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render () {

    return (
      <div>
          <NavBar/>
          <main>
            <Router>
              <Route exact path="/" component={About} class="main"/>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Router>
          </main>
          <Footer/>
      </div>
    );

  }
}

export default App;
