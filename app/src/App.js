import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HomeIt from './components/home';
import HomeEn from './components/home';
import ErrorIt from './components/error';
import ErrorEn from './components/error';


function App() {
  return (
    <div>
      <Helmet>
        <title>Riccardo Petrucci</title>
      </Helmet>
      <HomeEn/>
      <HomeIt/>
      <ErrorEn/>
      <ErrorIt/>

    </div>
  );
}

export default App;
