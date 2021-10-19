import React, { Component } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import PortfolioItems from './components/Portfolio/PortfolioItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    return (
      <div>
          <NavBar PortfolioItems={PortfolioItems}/>
          <main>
          </main>
          <Footer/>
      </div>
    );
}

export default App;
