import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HomeIt from './components/home_it';
import HomeEn from './components/home_en';
import ErrorIt from './components/error_it';
import ErrorEn from './components/error_en';
import Header from './components/header';

function App() {
  return (
    <div>
      <Helmet>
        <title>Riccardo Petrucci</title>
      </Helmet>
      <Header/>
      <HomeIt/>
    </div>
  );
}

export default App;
