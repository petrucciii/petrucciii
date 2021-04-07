import React, {Component} from 'react';
import '../App.css';
import {Helmet} from "react-helmet";

class ErrorIt extends Component() {
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci - Errore 404</title>
        </Helmet>
      </div>
    );
  }
}

export default ErrorIt;