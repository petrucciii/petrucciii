import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Home from './components/home';
//import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';
import Info from './components/info';
import Contact from './components/contact';

class App extends Component{
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci</title>
        </Helmet>
        <Header/>
        <Home/>
        <Info/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
