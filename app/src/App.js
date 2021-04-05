import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HomeIt from './components/home';
import ErrorIt from './components/error';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>Riccardo Petrucci</title>
      </Helmet>
      <Header/>
      <HomeIt/>
      <Footer/>
    </div>
  );
}

export default App;
