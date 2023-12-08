// import location and nav hooks 
import { useLocation, useNavigate } from 'react-router-dom';

// footer component
const Footer = () => {
  // use hooks
  const location = useLocation();
  const navigate = useNavigate();

  // return 
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
      </div>
    </footer>
  );
};

// export footer
export default Footer;
