import React, {Component} from 'react';
import Header from '../components/header';
import Home  from '../components/home';
import InfoEn  from '../components/infoEn';
import ContactEn  from '../components/contactEn';
import FooterEn from '../components/footerEn';

class HomeEn extends Component{
    state = {
      infoEn: [
        {
          id: 1,
          who: "WHO AM I", 
          who_content: "I am a web developer, I program with React.js, Javascript, HTML and CSS for the Front-End and Node.js or Django for the Back-End. I mainly do showcase sites."
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
      footerEn: [
        {
          id: 6, 
          copyright: "All Rights Reserved."
        }
      ],
    }

    render(){
        return(
            <div>
                <Header/>
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
            </div>
        )
    }
}

export default HomeEn;