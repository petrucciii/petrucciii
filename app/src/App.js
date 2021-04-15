import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Home from './components/home';
//import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';
import Info from './components/info';
import Contact from './components/contact';

class App extends Component{
  state = {
    infoIt: [
      {
        id: 0, 
        who: "CHI SIAMO", 
        who_content: "Sono un programmatore web, programmo con React.js, Bootstrap, HTML e CSS per il Front-End e Node.js e Django per il Back-End. Faccio principalmente siti vetrina."}
    ],
    infoEn: [
      {
        id: 1,
        who: "WHO AM I", 
        who_content: "I am a web developer, I program with React.js, Bootstrap, HTML and CSS for the Front-End and Node.js and Django for the Back-End. I mainly do showcase sites."
      }
    ],
    contactIt: [
      {
        id: 3, 
        name: "NOME",
        emmail: "E-MAIL",
        subject: "OGGETTO",
        send: "INVIA"
      }
    ],
    contactEn: [
      {
        id: 4, 
        name: "NAME",
        emmail: "E-MAIL",
        subject: "SUBJECT",
        send: "SEND"
      }
    ],
    footerIt: [
      {
        id: 5, 
        copyright: "Copyright &copy; 2021. Riccardo Petrucci. Tutti i Diritti Riservati"
      }
    ],
    footerEn: [
      {
        id: 6, 
        copyright: "Copyright &copy; 2021. Riccardo Petrucci. All Rights Reserved."
      }
    ],
  }
  render(){
    return (
      <div>
        <Helmet>
          <title>Riccardo Petrucci</title>
        </Helmet>
        <Header/>
        <Home/>
        <Info/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
