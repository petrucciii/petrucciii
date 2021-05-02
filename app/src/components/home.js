import React, {Component} from 'react';
import '../App.css';
import {Helmet} from "react-helmet";

class Home extends Component {
  render(){
    return (
      <div>
        <Helmet>
          <meta name="description" content="Sito Ufficiale di Riccardo Petrucci"/>
          <title>Riccardo Petrucci - Home</title>
        </Helmet>
        <section className="curved"></section>
        
      </div>
    );
  }
}

export default Home;