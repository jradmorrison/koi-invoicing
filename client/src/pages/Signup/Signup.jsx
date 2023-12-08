// import state
import { useState } from 'react';

// import mutation hook
import { useMutation } from '@apollo/client';

// import mutations
import { CREATE_BUSINESS } from '../../utils/mutations';

// import authentication
import Auth from '../../utils/auth';

// signup component
const Signup = () => {
  // state
  const [formState, setFormState] = useState({
    businessName: '',
    email: '',
    password: '',
  });

  // use mutation hook
  const [createBusiness, { error }] = useMutation(CREATE_BUSINESS);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);

    try {
      console.log("Test");
      const businessInput = {
        "name": formState.businessName,
        "email": formState.email,
        "password": formState.password,
        "companyLogo": "null"
      }
      const { data } = await createBusiness({
        variables: { businessInput },
      });

      console.log(data);
      Auth.login(data.createBusiness.token);
    } catch (e) {
      console.error(e);
    }
  };

  // return 
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <div id="login" className="p-3 rounded-5 col-xl-3 col-lg-4 col-md-6 col-10">
        <div>
          <div className="text-center heading">Koi</div>
          <div className="text-center sub-heading">Create Account</div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="my-3">
            <input
              className="form-control"
              placeholder="business name"
              name="businessName"
              type="text"
              value={formState.businessName}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <input
              className="form-control"
              placeholder="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <input
              className="form-control"
              placeholder="password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
          <div className="d-flex align-items-center flex-column">
            <button className="btn btn-dark px-3" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

// export signup
export default Signup;

