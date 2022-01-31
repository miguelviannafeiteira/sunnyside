import './App.css';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import arrow from './images/icon-arrow-down.svg';
import transform from './images/desktop/image-transform.jpg';
import stand from './images/desktop/image-stand-out.jpg';
import emily from './images/image-emily.jpg';
import jennie from './images/image-jennie.jpg';
import thomas from './images/image-thomas.jpg';
import milk from './images/desktop/image-gallery-milkbottles.jpg';
import cone from './images/desktop/image-gallery-cone.jpg';
import orange from './images/desktop/image-gallery-orange.jpg';
import sugarcubes from './images/desktop/image-gallery-sugarcubes.jpg';

function App() {
  function openMenu(event) {
    const headerNav = document.querySelector('.header-nav');
    headerNav.classList.toggle('active');
    event.target.classList.toggle('active');
    console.log(event.target);
  }

  return (
    <div className="App">
      <header>
        <div className="header-top">
          <a className="sunnyside" href="./">
            sunnyside
          </a>
          <button className="btn" onClick={openMenu}></button>
          <ul className="header-nav">
            <li>
              <a href="./">About</a>
            </li>
            <li>
              <a href="./">Services</a>
            </li>
            <li>
              <a href="./">Projects</a>
            </li>
            <li>
              <a className="contact" href="./">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="creative-div">
          <h1>WE ARE CREATIVES</h1>
          <img className="arrow" src={arrow} alt="flecha" />
        </div>
      </header>
      <main>
        <div>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="./">LEARN MORE</a>
        </div>
        <img className="ovo" src={transform} alt="ovo" />

        <img src={stand} alt="" />
        <div>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a href="./">LEARN MORE</a>
        </div>

        <div className="cherry">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>

        <div className="tangerine">
          <h2>Photography</h2>
          <p>
            Increase your credibillity by getting the most stunning,
            high-quality photos that improve your business image.
          </p>
        </div>
      </main>

      <h1 className="test">CLIENT TESTIMONIALS</h1>
      <section className="profiles">
        <div>
          <img src={emily} alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3>Emily R.</h3>
          <span>Marketing Director</span>
        </div>
        <div>
          <img src={thomas} alt="" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's sucess made it a satisfying and enjoyable experience.
          </p>
          <h3>Thomas S.</h3>
          <span>Chief Operating Officer</span>
        </div>
        <div>
          <img src={jennie} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3>Jennie F.</h3>
          <span>Business Owner</span>
        </div>
      </section>
      <section className="photos">
        <img src={milk} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugarcubes} alt="" />
      </section>

      <footer>
        <h1>sunnyside</h1>
        <ul>
          <li>
            <a href="./">About</a>
          </li>
          <li>
            <a href="./">Services</a>
          </li>
          <li>
            <a href="./">Projects</a>
          </li>
        </ul>

        <div className="footer-redes">
          <a href="./">
            <img src={facebook} alt="" />
          </a>
          <a href="./">
            <img src={instagram} alt="" />
          </a>
          <a href="./">
            <img src={twitter} alt="" />
          </a>
          <a href="./">
            <img src={pinterest} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
