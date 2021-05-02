import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Error404 from './pages/Error';
import HomeIt from './pages/HomeIt';

class App extends Component{
  state = {
    infoIt: [
      {
        id: 0, 
        who: "CHI SONO", 
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
        contact: "CONTATTI",
        name: "NOME",
        email: "E-MAIL",
        subject: "OGGETTO",
        send: "INVIA"
      }
    ],
    contactEn: [
      {
        id: 4, 
        contact: "CONTACT",
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
        <HomeIt/>

        {/*<Error404/>*/}
        {/*<Header/>
        <Home/>
        {this.state.infoEn.map(info => (
          <InfoEn
            onlangChange={this.langChange}
            key={info.id}
            who={info.who}
            who_content={info.who_content}
          />
        ))}
        {this.state.contactEn.map(contact => (
          <ContactEn
            key={contact.id}
            name={contact.name}
            email={contact.email}
            subject={contact.subject}
            send={contact.send}
            contact={contact.contact}
          />
        ))}
        {this.state.footerEn.map(footer => (
          <FooterEn
            key={footer.id}
            copyright={footer.copyright}
          />
        ))}
        {this.state.infoIt.map(info => (
          <InfoIt
            key={info.id}
            who={info.who}
            who_content={info.who_content}
          />
        ))}
        {this.state.contactIt.map(contact => (
          <ContactIt
            key={contact.id}
            name={contact.name}
            email={contact.email}
            subject={contact.subject}
            send={contact.send}
            contact={contact.contact}
          />
        ))}
        {this.state.footerIt.map(footer => (
          <FooterIt
            key={footer.id}
            copyright={footer.copyright
          />
        ))}*/}
      </div>
    );
  }
}

export default App;
