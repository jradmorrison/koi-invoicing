import { Link } from 'react-router-dom';
import './style.css';
import Auth from '../../utils/auth';
import koi from '../../assets/images/logo1.png';

import Avatar from '@mui/material/Avatar';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={koi}
              alt="Logo"
              width="auto"
              height="100px"
              className="d-inline-block align-text-top"></img>
          </a>
          <div className="d-flex">
            <div className="mx-3 text-light text-end">
              <h5>Business Name</h5>
              <a className="" href=''>View My Profile</a>
            </div>
            <div className="mx-3 my-auto">
              <Avatar alt="Profile Image" src={'/static/images/avatar/3.jpg'} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
