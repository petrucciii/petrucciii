import React, {Component} from 'react';
import '../App.css';
import contact from '../images/contact.jpg';

class Contact extends Component{
  render(){
    return (
      <div>
        <div className="contact">
            <div className="card">
                <div className="card_content">
                    <img src={contact} alt="CONTATTI" style={{width: "100px", height: "100px"}}/>
                    <h4 className="card_title" align="center">CONTATTI</h4>
                    <div className="display-6">
                      <div><a className="fa fa-lg fa-github icons" id="icon-1" target="_blank" rel="noreferrer" href="https://www.github.com/petrucciii/">Github</a></div>
                      <div><a className="fa fa-lg fa-instagram icons" id="icon-2" target="_blank" rel="noreferrer" href="https://www.instagram.com/rickypetrucci.js/">Intagram</a></div>
                      <div><a className="fa fa-lg fa icons" id="icon-3" target="_blank" rel="noreferrer" href="mailto:riccardo.petrucci99@gmail.com">E-Mail</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            marginBottom: "15px"
        }}>

        </div>
      </div>
    );
  }
}

export default Contact;