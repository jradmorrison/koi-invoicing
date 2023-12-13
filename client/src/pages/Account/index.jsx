import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import formatDate from '../../utils/dateFormatter';

import { GET_CURRENT_BUSINESS } from '../../utils/queries';
import { UPDATE_BUSINESS, DELETE_BUSINESS } from '../../utils/mutations';
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

  const [updateBusiness, { error }] = useMutation(UPDATE_BUSINESS);
  const [deleteBusiness, { error: err }] = useMutation(DELETE_BUSINESS);

  const { loading, data, refetch } = useQuery(GET_CURRENT_BUSINESS);
  const business = data?.currentBusiness || {};

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
        email: formState.email,
      };

      try {
        const { data } = await updateBusiness({
          variables: { id: business._id, businessUpdate: businessUpdate },
        });
        console.log(data);
        closeModel();
        refetch();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleAccountDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (confirmDelete == true) {
      try {
        const { data } = await deleteBusiness({
          variables: { id: business._id },
        });
        Auth.logout();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className="">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="p-3">
            <a href="/dashboard">
              <Button className='link-light'>Back to dashboard</Button>
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
            <div className="d-flex">
              <div className="m-3">
                <Button variant="outlined" onClick={showModel}>
                  Edit Account Details
                </Button>
              </div>
              <div className="m-3">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={handleAccountDelete}>
                  Delete Account
                </Button>
              </div>
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
                    variant="outlined"
                    color="success"
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
