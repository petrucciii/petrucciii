import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';

class Footer extends Component {
  render(){
    return (
      <div>
        <footer>
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
          <div className="space"></div>
        </footer>
      </div>
    );
  }
}

export default Footer;