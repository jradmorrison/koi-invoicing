//import photos
import mobile from "../../assets/images/mobileScreenshot.png";
import web from "../../assets/images/invoiceScreenshot.png";

export default function AboutTab() {
  return (
    <div className="holder">
    <div className="">
          <p className="p-3 about">
            Koi is a comprehensive invoicing platform designed to streamline the
            billing process for freelancers and small businesses.
          </p>
          <img src={web} className="float-right web"></img>
        <img src={mobile} className='d-flex mobile'></img>
          <p className="about">
            With a powerful MERN stack foundation, we provide a user-friendly
            interface to create, manage, and send invoices effortlessly.
            Additionally, our platform allows you to set up subscription plans
            for recurring billing, making it easy to manage client payments.
            Stay organized and save time with Koi as you focus on growing your
            business.
          </p>
    </div>
    </div>
  );
}
