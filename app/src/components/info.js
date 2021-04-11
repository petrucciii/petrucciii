import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';
import who from '../images/who.jpg';

class Info extends Component{
  render(){
    return (
      <div>
        <div className="info">
          <div className="card">
            <div className="card_content">
            <img 
              src={who} 
              alt="CHISONO" 
              style={{
                width: "100px",
                 height: "100px"
              }}
            />
              <h4 
                className="card_title" 
                align="center"
              >
                CHI SONO
              </h4>
              <div className="display-6">
                Sono un programmatore web, programmo con React.js, Bootstrap, HTML e CSS per il Front-End e Node.js, PHP e Django per il Back-End.
                Faccio principalmente siti vetrina.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;