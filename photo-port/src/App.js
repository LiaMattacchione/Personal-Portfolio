import React, { useState } from 'react';
import NavBar from './components/Nav';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div>
        <NavBar/>
        <main>
            <About></About>
      </main>
    </div>
  );
}

export default App;
