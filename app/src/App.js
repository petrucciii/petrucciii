import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Riccardo Petrucci</title>
          </Helmet>
          <Switch>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}