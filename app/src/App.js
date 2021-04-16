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
    contactIt: [
      {
        id: 3, 
        name: "NOME",
        email: "E-MAIL",
        subject: "OGGETTO",
        send: "INVIA"
      }
    ],
    footerIt: [
      {
        id: 5, 
        copyright: "Tutti i Diritti Riservati."
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
        {this.state.infoIt.map(info => (
          <Info
            onlangChange={this.langChange}
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
