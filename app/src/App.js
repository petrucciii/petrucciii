import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
//import Error404 from './pages/Error';
import HomeIt from './pages/HomeIt';
//import HomeEn from './pages/HomeEn';

class App extends Component{
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci</title>
        </Helmet>
        <HomeIt/>
        {/*<Error404/>
        <HomeEn/>*/}
      </div>
    );
  }
}

export default App;
