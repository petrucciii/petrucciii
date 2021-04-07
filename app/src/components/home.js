import React, {Component} from 'react';
import '../App.css';
import {Helmet} from "react-helmet";

class HomeIt extends Component {
  render(){
    return (
      <div>
        <Helmet>
          <meta name="description" content="Sito Ufficiale di Riccardo Petrucci"/>
          <title>Riccardo Petrucci - Home</title>
        </Helmet>
        <div id="main_img"></div>
      </div>
    );
  }
}

export default HomeIt;