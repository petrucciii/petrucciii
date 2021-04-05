import React from 'react';
import '../App.css';

function Footer() {
  return (
    <div>
      <footer>
        <div id="copyright">Copyright &copy; 2021. Tutti i diritti riservati.</div>
        <div align="center" className="socialbtns">
          <ul>
            <li>
              <a target="_blank" href="https://www.github.com/petrucciii/" className="fa fa-lg fa-github"> </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/rickypetrucci.js/" className="fa fa-lg fa-instagram"> </a>
            </li>
          </ul>
        </div>
        <div className="space"></div>
      </footer>
    </div>
  );
}

export default Footer;