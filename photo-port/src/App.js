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
          </main>
          <Footer/>
      </div>
    );

  }
}

export default App;
