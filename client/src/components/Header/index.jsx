import { Link } from 'react-router-dom';
import './style.css';
import Auth from '../../utils/auth';
import koi from '../../assets/images/logo1.png';

import Avatar from '@mui/material/Avatar';
// TODO: logo is being passed in as a prop, need a conditional statement if logo is null use defualt avatar, if not use logo src for avatar src. Need to put size constraints on it.
const Header = (props) => {
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
              <h5>{props.businessName}</h5>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <a className="" href={`/account/${props.businessId}`}>Account Settings</a>
                <a href='' onClick={logout}>Logout</a>
              </div>
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
