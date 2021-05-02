import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';

class FooterIt extends Component {
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
            <a className="lang" href="javascript:void(0);" style={{color: 'tomato'}} id="it" >ITALIANO</a>
            <a className="lang" href="javascript:void(0);" id="slash">/</a>
            <a className="lang" href="javascript:void(0);" id="en">ENGLISH</a>
          </div>
          <div className="space"></div>
        </footer>
      </div>
    );
  }
}

export default FooterIt;