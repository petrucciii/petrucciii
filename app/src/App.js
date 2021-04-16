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
        email: "E-MAIL",
        subject: "OGGETTO",
        send: "INVIA"
      }
    ],
    contactEn: [
      {
        id: 4, 
        name: "NAME",
        email: "E-MAIL",
        subject: "SUBJECT",
        send: "SEND"
      }
    ],
    footerIt: [
      {
        id: 5, 
        copyright: "Tutti i Diritti Riservati."
      }
    ],
    footerEn: [
      {
        id: 6, 
        copyright: "All Rights Reserved."
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
        {function changeLangit() {
          {this.state.infoIt.map(info => (
            <Info
              key={info.id}
              who={info.who}
              who_content={info.who_content}
            />
          ))}
        }}
        {function changeLangen() {
          {this.state.infoEn.map(info => (
            <Info
              key={info.id}
              who={info.who}
              who_content={info.who_content}
            />
          ))}
        }}
        {this.state.infoIt.map(info => (
            <Info
              key={info.id}
              who={info.who}
              who_content={info.who_content}
            />
        ))}
        
        {this.state.contactIt.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            subject={contact.subject}
            send={contact.send}
          />
        ))}
        {this.state.footerIt.map(footer => (
          <Footer
            key={footer.id}
            copyright={footer.copyright}
          />
        ))}
      </div>
    );
  }
}

export default App;
