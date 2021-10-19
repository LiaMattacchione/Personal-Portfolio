import React, { Component } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import PortfolioItems from './components/Portfolio/PortfolioItems';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import proOne from './assets/large/ChefsWay_Icon.png';
// import proTwo from './assets/large/budget.png';
// import proThree from './assets/large/COVIDcoders-smaller.png';
// import proFour from './assets/large/GEDC-icon.png';
// import proFive from './assets/large/Healthy-icon.png';
// import proSix from './assets/large/OKA-icon.png';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

    // const portfolioItems = [
    //   {
    //     id: 1, 
    //     imgurl: proOne, 
    //     title: 'ChefsWay', 
    //     description: 'An easy to use app to join a cooking network to share your delicious creations.', 
    //     githubLink: 'https://github.com/BootcampProject/ChefsWay', 
    //     appLink: 'https://chefsway.herokuapp.com/'
    //   },
    //   {
    //     id: 2, 
    //     imgurl: proTwo, 
    //     title: 'Budget Tracker', 
    //     description: 'A simple application that allows you to track your expenses on and offline.', 
    //     githubLink: 'https://github.com/LiaMattacchione/PWA-BudgetTracker', 
    //     appLink: 'https://budget-tracker-lia.herokuapp.com/'
    //   },
    //   {
    //     id: 3, 
    //     imgurl: proThree, 
    //     title: 'Staying Current with COVID', 
    //     description: 'Stay current with the COVID-19 panedmic with news, stats and scientific studies.', 
    //     githubLink: 'https://github.com/LiaMattacchione/Current_COVID19', 
    //     appLink: 'https://bootcampproject.github.io/Group5-COVID-Coders/',
    //   },
    //   {
    //     id: 4, 
    //     imgurl: proFour, 
    //     title: 'The Geriatric Emergency Department Collaborative', 
    //     description: 'Nationwide collaborative dedicated to improving the quality of care for older people in Emergency Departments with the goal of reducing harm and improving healthcare outcomes.', 
    //     githubLink: '', 
    //     appLink: 'https://gedcollaborative.com/'
    //   },
    //   {
    //     id: 5, 
    //     imgurl: proFive, 
    //     title: 'Healthy Debate', 
    //     description: 'Publishes journalism about health care in Canada', 
    //     githubLink: '', 
    //     appLink: 'https://healthydebate.ca/'
    //   },
    //   {
    //     id: 6, 
    //     imgurl: proSix, 
    //     title: 'Kinesiology Evidence & Engagement Network', 
    //     description: 'A practice-based research network, to serve as a hub to support collaboration between front-line Kinesiologists and academic researchers.', 
    //     githubLink: '', 
    //     appLink: 'https://oka.on.ca/'
    //   }
    // ];

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
