import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import {Helmet} from "react-helmet";
import Error404 from './pages/Error';
import HomeIt from './pages/HomeIt';
import HomeEn from './pages/HomeEn';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Riccardo Petrucci</title>
          </Helmet>
          <Switch>
            <Route exact path="/" component={HomeIt}/>
            <Route exact path="/it" component={HomeIt}/>
            <Route exact path="/en" component={HomeEn}/>
            <Route exact path="/us" component={HomeEn}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
