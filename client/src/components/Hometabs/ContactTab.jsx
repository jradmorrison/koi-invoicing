import { Navigate, Link } from 'react-router-dom';

export default function ContactTab() {
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-light rounded-4 p-3">
        <div className=" text-center p-4">
          <h2>Join the best invoicing platform today!</h2>
        </div>
        <div className="text-center mb-4">
          <button type="button" className="btn btn-secondary">
            <Link
              to={'/signup'}
              className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              Click Here to Sign Up
            </Link>
          </button>
        </div>
        <div className="text-center p-4">
          <h3>Already a member?</h3>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-secondary">
            <Link
              to={'/login'}
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              Proceed to Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
