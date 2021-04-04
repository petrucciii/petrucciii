import React from 'react';
import '../App.css';
import {Helmet} from "react-helmet";

function ErrorIt() {
  return (
    <div>
      <Helmet>
        <title>Riccardo Petrucci - Errore 404</title>
      </Helmet>
    </div>
  );
}

export default ErrorIt;