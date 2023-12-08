// import state
import { useState } from 'react';

// import mutation hook
import { useMutation } from '@apollo/client';

// import mutations
import { LOGIN_BUSINESS } from '../../utils/mutations';

;// import authentication 
import Auth from '../../utils/auth';

// import stylesheet
import './style.css';

// login component
const Login = () => {
  // state
  const [formState, setFormState] = useState({ email: '', password: '' });

  // mutation 
  const [loginBusiness, { error }] = useMutation(LOGIN_BUSINESS);

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
    console.log(formState);
    try {
      const { data } = await loginBusiness({
        variables: { ...formState },
      });

      Auth.login(data.loginBusiness.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  // return
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <div id="login" className="p-3 rounded-5 col-lg-3 col-md-6 col-10">
        <div>
          <div className="text-center heading">Koi</div>
          <div className="text-center sub-heading">Sign-In</div>
        </div>
        <form onSubmit={handleFormSubmit}>
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
            <button className="btn btn-dark px-5" type="submit">
              Login
            </button>
            <div className="py-1">
              <a href="">Forgot Password?</a>
            </div>
            <div className="">
              <a href="/signup">Click here to create an account</a>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

// export login 
export default Login;
