import React, {Component} from 'react';
import Header from '../components/header';
import Home  from '../components/home';
import InfoIt  from '../components/infoIt';
import ContactIt  from '../components/contactIt';
import FooterIt from '../components/footerIt';

class HomeIt extends Component{
    state = {
        infoIt: [
            {
              id: 0, 
              who: "CHI SONO", 
              who_content: "Sono un programmatore web, programmo con React.js, Javascript, HTML e CSS per il Front-End e Node.js o Django per il Back-End. Faccio principalmente siti vetrina."
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

        footerIt: [
            {
              id: 5, 
              copyright: "Tutti i Diritti Riservati."
            }
        ],
    }

    render(){
        return(
            <div>
                <Header/>
                <Home/>
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
                        copyright={footer.copyright}
                    />
                ))}
            </div>
        )
    }
}


export default HomeIt;
