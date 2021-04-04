import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HomeIt from './components/home';
import ErrorIt from './components/error';
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
