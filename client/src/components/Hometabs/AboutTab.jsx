//import photos
import mobile from "../../assets/images/mobileScreenshot.png";
import web from "../../assets/images/invoiceScreenshot.png";

export default function AboutTab() {
  return (
    <div className="holder">
      <div className="d-flex justify-content-center gap-3 a2">
        <div>
          <p className="p-3 about text-left a1">
            KOI is a comprehensive invoicing 
            <br/>platform designed to streamline the billing process for 
            <br/>freelancers and small businesses.
          </p>
        </div>
        <div>
          <img src={web} className="web"></img>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
        <img src={mobile} className="d-flex mobile"></img>
        </div>
        <div>
        <p className="about p-3 text-right a3">
            With a powerful MERN stack foundation, we provide a user-friendly <br/>
            interface to create, manage, and send invoices effortlessly. <br/> <br/>

            Stay organized and save time with KOI as you focus on growing your
            business.
          </p>
        </div>
      </div>
    </div>
  );
}
