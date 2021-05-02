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
                  WHO AM I
                </h4>
              <div className="display-6">
                I am a web developer, I program with React.js, Bootstrap, HTML and CSS for the Front-End and Node.js and Django for the Back-End. I mainly do showcase sites.
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
            <div className="card-contact">
              <div className="card_content">
                <img src={contactImg} alt="CONTATTI" style={{width: "100px", height: "100px"}}/>
                <h4 className="card_title" align="center">CONTACT</h4>
                <div className="form">
                  <form className="form-contact" >
                    <label className="text">NAME</label>
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
                    <label className="text">SUBJECT</label>
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
                      value="SEND"
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
            <div id="copyright">Copyright &copy; 2021. Riccardo Petrucci. All Rights Reserved.</div>
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