import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';
import contactImg from '../images/contact.jpg';

class Contact extends Component{
  render(){
    return (
      <div>
        <div className="contact">
            <div className="card-contact">
                <div className="card_content">
                    <img src={contactImg} alt="CONTATTI" style={{width: "100px", height: "100px"}}/>
                    <h4 className="card_title" align="center">CONTATTI</h4>
                    <div className="form">
                      <form className="form-contact" >
                        <label className="text">{this.props.name}</label>
                        <br/>
                        <input 
                          type="text" 
                          className="name" 
                          name="name"
                        />
                        <br/>
                        <label className="text">{this.props.email}</label>
                        <br/>
                        <input
                          type="e-mail" 
                          className="e-mail" 
                          name="e-mail"
                        />
                        <br/>
                        <label className="text">{this.props.subject}</label>
                        <br/>
                        <textarea
                          type="text" 
                          className="txtarea" 
                          name="txtarea">
                        </textarea>
                        <br/>
                        <input
                          type="submit"
                          className="send-button"
                          value={this.props.send}
                          name="submit"
                        />
                      </form>
                    </div>
                    <div className="display-6">
                      <div>
                        <a 
                          className="fa fa-lg fa-github icons" 
                          id="icon-1" target="_blank" 
                          rel="noreferrer" 
                          href="https://www.github.com/petrucciii/">
                            Github
                        </a>
                      </div>
                      <div>
                        <a 
                          className="fa fa-lg fa-instagram icons" 
                          id="icon-2" target="_blank" 
                          rel="noreferrer" 
                          href="https://www.instagram.com/rickypetrucci.js/">
                            Intagram
                        </a>
                      </div>
                      <div>
                        <a 
                          className="fa fa-lg fa icons" 
                          id="icon-3" target="_blank" 
                          rel="noreferrer" 
                          href="mailto:riccardo.petrucci99@gmail.com"
                          aria-disabled="false">
                            E-Mail
                        </a>
                      </div>
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