//import photos
import mobile from '../../assets/images/mobileScreenshot.png';
import web from '../../assets/images/invoiceScreenshot.png';

export default function AboutTab() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center a2 box1">
        <div>
          <p className="about text-left a1">
            KOI is a comprehensive invoicing platform designed to streamline the
            billing process for freelancers and small businesses.
          </p>
        </div>
        <div>
          <img src={web} className="web"></img>
        </div>
      </div>
      <div className="d-flex justify-content-center box2">
        <div>
          <img src={mobile} className="d-flex mobile"></img>
        </div>
        <div>
          <p className="about text-right a3">
            With a powerful MERN stack foundation, we provide a user-friendly
            interface to create, manage, and send invoices effortlessly. Stay
            organized and save time with KOI as you focus on growing your
            business.
          </p>
        </div>
      </div>
    </div>
  );
}
