import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import '../mobile.css';

class FooterEn extends Component {
  render(){
    return (
      <div>
        <footer style={{backgroundColor: '#404040'}}>
          <div id="copyright">Copyright &copy; 2021. Riccardo Petrucci. {this.props.copyright}</div>
          <div 
            align="center" 
            className="socialbtns"
          >
            <ul>
              <li>
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://www.github.com/petrucciii/" 
                  className="fa fa-lg fa-github"
                >
                </a>
              </li>
              <li>
                <a 
                  target="_blank" 
                  rel="noreferrer" 
                  href="https://www.instagram.com/rickypetrucci.js/" 
                  className="fa fa-lg fa-instagram"
                >
                </a>
              </li>
            </ul>
          </div>
          <div className="lang-cont">
          <Link to="/it"><a className="lang" href="#" id="it" >ITALIANO</a></Link>
          <a className="lang" href="#" id="slash">/</a>
          <Link to="/en"><a className="lang" href="#" style={{color: 'tomato'}} id="en">ENGLISH</a></Link>
          </div>
          <div className="space"></div>
        </footer>
      </div>
    );
  }
}

export default FooterEn;