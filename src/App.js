import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
        <nav>
          <ul>
              <li>
                  <a href="#about-me-fieldset">About Me</a>
              </li>
              <li>
                  <a href="#my-projects-fieldset">My Projects</a>
              </li> 
          </ul>
        </nav>
    
        <main>
          <h1>Welcome to my website!</h1>
          <fieldset id = "about-me-fieldset">
              <legend> About Me </legend>
              <div className="about-me">
                  <h2>Info</h2>
                  <div id="text-container"></div>
                  <a className="btn" id="type-button">
                      View!
                      <span className="shadow"><span></span></span>
                  </a>
                  <script src="./text.js"></script>
              </div>
          
              <div className="contact-info">
                  <h2>Contact</h2>
                  <div id="contact-container"></div>
                  <a className="btn" id="contact-button">
                      View!
                      <span className="shadow"><span></span></span>
                  </a>
                  <script src="./contact.js"></script>
                  <p></p>
              </div>
          </fieldset>
          {/* <p>
          </p>
          <fieldset id="my-projects-fieldset">
              <legend> My projects </legend>
              <br>
              <iframe width="640" height="360" src="https://www.youtube.com/embed/SZShsA13kK0?rel=0&enablejsapi=1" title="Hackathon - Digital Health Data" frameborder="0" ></iframe>
              <br>
          </fieldset> */}

          

        </main>
    </div>
  );
}

export default App;
