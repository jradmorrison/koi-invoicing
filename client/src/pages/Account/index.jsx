import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import formatDate from '../../utils/dateFormatter';

import { GET_CURRENT_BUSINESS } from '../../utils/queries';
import { UPDATE_BUSINESS } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css';

const Account = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [visibility, toggleVisibility] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { loading, data } = useQuery(GET_CURRENT_BUSINESS);
  const business = data?.currentBusiness || {};
  
  const [updateBusiness, {error}] = useMutation(UPDATE_BUSINESS);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const showModel = () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    toggleVisibility(true);
  };

  const closeModel = () => {
    document.body.style.overflow = 'auto';
    toggleVisibility(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formState.name !== '' && formState.email !== '') {
      const businessUpdate = {
        name: formState.name,
        email: formState.email
      };

      try {
        const {data} = await updateBusiness({
          variables: { id: }
        })
      } catch (err) {
        
      }
    }
  }

  console.log(formState);
  return (
    <main className="">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="p-3">
            <a href="/dashboard">
              <Button>Back to dashboard</Button>
            </a>
          </div>
          <div className="container bg-light rounded-4 p-3">
            <div className="text-center fs-2">Account Details</div>
            <p>
              Account name: <span className="fw-bold">{business.name}</span>
            </p>
            <p>
              Associated email:{' '}
              <span className="fw-bold">{business.email}</span>
            </p>
            <p>
              User Since:{' '}
              <span className="fw-bold">{formatDate(business.userSince)}</span>
            </p>
            <div>
              <Button variant="outlined" onClick={showModel}>
                Edit Account Details
              </Button>
            </div>
          </div>
          {visibility ? (
            <>
              <div className="overlay"></div>
              <div
                id="editAccount"
                className="rounded-4 px-3 py-3 col-xl-6 col-sm-8 col-12 position-absolute top-50 start-50 translate-middle bg-light">
                <div className="text-end">
                  <Button variant="outlined" color="error" onClick={closeModel}>
                    ❌
                  </Button>
                </div>
                <div className="fs-4 text-center">Edit Account Details</div>
                <div className="mb-3">
                  <label className="form-label">Account/Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder={business.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Account/Business Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder={business.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Button 
                    variant='outlined' 
                    color='success'
                    onClick={handleFormSubmit}>
                      Update Account Details
                    </Button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </main>
  );
};

export default Account;
