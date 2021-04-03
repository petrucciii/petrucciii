import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Home from './components/home';
import Error from './components/error';


function App() {
  return (
    <div>
      <Helmet>
        <title>Riccardo Petrucci</title>
      </Helmet>
    </div>
  );
}

export default App;
