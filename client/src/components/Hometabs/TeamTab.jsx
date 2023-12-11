//import photos
import brandon from '../../assets/images/brandonicon.png';
import trae from '../../assets/images/TraeIcon.png';
import kathryn from '../../assets/images/kathryn-icon.png';

export default function TeamTab() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3 className="text-center">
          Meet the Masterminds <br /> Behind KOI Invoicing Services
        </h3>
      </div>
      <div className="text-center">
        <p>Brandon Barnes, Jared Morrison, Trae Roy, Kathryn Dougherty</p>
      </div>
      <div className="card" style={{width: "20rem"}}>
  <div className="card-body text-center">
    <img src={brandon} className='icon'></img>
    <h5 className="card-title">Brandon Barnes</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Short bio</p>
    <a href="https://github.com/ThatZiro" className="card-link">GitHub</a>
    <a href="#" className="card-link">LinkedIn</a>
  </div>
  <div className="card-body text-center">
    <h5 className="card-title">Jared Morrison</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Short bio</p>
    <a href="https://github.com/jradmorrison" className="card-link">GitHub</a>
    <a href="#" className="card-link">LinkedIn</a>
  </div>
  <div className="card-body text-center">
  <img src={trae} className='icon'></img>
    <h5 className="card-title">Trae Roy</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">short bio</p>
    <a href="https://github.com/Roesnware" className="card-link">GitHub</a>
    <a href="#" className="card-link">LinkedIn</a>
  </div>
  <div className="card-body text-center">
  <img src={kathryn} className='icon'></img>
    <h5 className="card-title">Kathryn Dougherty</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">CSS Design</h6>
    <p className="card-text">Short bio</p>
    <a href="https://github.com/kathrynfisher3700" className="card-link">GitHub</a>
    <a href="#" className="card-link">LinkedIn</a>
  </div>
</div>

      <div className="text-center">
        <p>The team connected at a Full-Stack Web Development Bootcamp provided by the University of Central Florida and Edex.</p>
      </div>
    </div>
  );
}
