import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import {Helmet} from "react-helmet";

class Error extends Component {
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci - Errore 404</title>
        </Helmet>
        <div className="error-404">
          <div className="error">ERRORE</div>
          <div className="e-404">404</div>
          <div className="back-home-cont">
            <Link to="/" style={{backgroundColor: 'white'}}>
              <a className="back-home">
              TORNA ALLA HOME
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;