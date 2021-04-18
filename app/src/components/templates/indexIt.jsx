function index() {
  <body>
      <header className="header">
          <h3>
            RICCARDO PETRUCCI
          </h3>
      </header>
      <section class="curved"></section>
      <div className="info">
        <div className="card">
            <div className="card_content">
            <img 
              src={whoImg} 
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
              Sono un programmatore web, programmo con React.js, Bootstrap, HTML e CSS per il Front-End e Node.js e Django per il Back-End. Faccio principalmente siti vetrina.
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
          <div className="card-contact">
            <div className="card_content">
              <img src={contactImg} alt="CONTATTI" style={{width: "100px", height: "100px"}}/>
              <h4 className="card_title" align="center">CONTATTI</h4>
              <div className="form">
                <form className="form-contact" >
                  <label className="text">NOME</label>
                  <br/>
                  <input 
                    type="text" 
                    className="name" 
                    name="name"
                  />
                  <br/>
                  <label className="text">E-MAIL</label>
                  <br/>
                  <input
                    type="e-mail" 
                    className="e-mail" 
                    name="e-mail"
                  />
                  <br/>
                  <label className="text">OGGETTO</label>
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
                    value="INVIA"
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
      <footer>
          <div id="copyright">Copyright &copy; 2021. Riccardo Petrucci. Tutti i Diritti Riservati.</div>
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
            <a className="lang" href="javascript:void(0);" id="it" >ITALIANO</a>
            <a className="lang" href="javascript:void(0);" id="slash">/</a>
            <a className="lang" href="javascript:void(0);" id="en">ENGLISH</a>
          </div>
          <div className="space"></div>
      </footer>
  </body>
}