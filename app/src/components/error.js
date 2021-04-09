import React, {Component} from 'react';
import '../App.css';
import {Helmet} from "react-helmet";

class ErrorIt extends Component {
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci - Errore 404</title>
        </Helmet>
        <div className="error-404">
          <div className="error">ERRORE</div>
        </div>
      </div>
    );
  }
}

export default ErrorIt;