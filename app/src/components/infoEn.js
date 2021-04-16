import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';
import whoImg from '../images/who.jpg';

class InfoEn extends Component{
  render(){
    return (
      <div>
        <div className="info">
          <div className="card">
            <div className="card_content">
            <img 
              src={whoImg} 
              alt="WHOAMI" 
              style={{
                width: "100px",
                height: "100px"
              }}
            />
              <h4 
                className="card_title" 
                align="center"
              >
                {this.props.who}
              </h4>
              <div className="display-6">{this.props.who_content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoEn;