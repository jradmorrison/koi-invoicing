//import photos
// import brandon from '../../assets/images/brandonicon.png';
import brandon from './assets/images/brandonIcon.png';
// import trae from '../../assets/images/TraeIcon.png';
import trae from './assets/images/TraeIcon.png';
// import kathryn from '../../assets/images/kathryn-icon.png';
import kathryn from './assets/images/kathryn-icon.png';
// import jared from '../../assets/images/jared-icon.png';
import jared from './assets/images/jared-icon.png';

export default function TeamTab() {
  return (
    <div className="container">
      <div className="">
        <h3 className="text-center teamHeader mt-4">
          The Masterminds <br /> Behind KOI Invoicing Services
        </h3>
      </div>
      <div id="one" className="d-flex justify-content-center mt-5">
        <div className="2">
          <div className="card">
            <div className="card-body text-center">
              <img src={brandon} className="icon"></img>
              <h5 className="card-title">Brandon Barnes</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Full-Stack Developer
              </h6>
              <p className="card-text"></p>
              <a
                href="https://github.com/ThatZiro"
                target="_blank"
                className="card-link">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-b-tech/"
                target="_blank"
                className="card-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img src={jared} className="icon"></img>
              <h5 className="card-title">Jared Morrison</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Full Stack Developer
              </h6>
              <p className="card-text"></p>
              <a
                href="https://github.com/jradmorrison"
                target="_blank"
                className="card-link">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jradmorrison/"
                target="_blank"
                className="card-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="5">
          <div className="card">
            <div className="card-body text-center">
              <img src={trae} className="icon"></img>
              <h5 className="card-title">Trae Roy</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Full-Stack Developer
              </h6>
              <p className="card-text"></p>
              <a
                href="https://github.com/Roesnware"
                target="_blank"
                className="card-link">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/trae-roy-815a02244/"
                target="_blank"
                className="card-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-body text-center">
                <img src={kathryn} className="icon"></img>
                <h5 className="card-title">Kathryn Dougherty</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  CSS Design
                </h6>
                <p className="card-text"></p>
                <a
                  href="https://github.com/kathrynfisher3700"
                  target="_blank"
                  className="card-link">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kathryn-dougherty-fisher/"
                  target="_blank"
                  className="card-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-light">
          The team connected at a Full-Stack Web Development Bootcamp provided
          by the University of Central Florida and Edex.
        </p>
      </div>
    </div>
  );
}
