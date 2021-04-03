import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import {useState, useEffect} from 'react';

function Home() {
  const [initialState, setInitialState] = useState([])

  useEffect(()=>{
    fetch('/api/').then
  })
  return (
    <div>
        <Helmet>
            <title>Riccardo Petrucci - Home</title>
        </Helmet>
    </div>
  );
}

export default Home;