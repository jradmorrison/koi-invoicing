// import state
import { useState } from 'react';

// import link 
import { Link } from 'react-router-dom';

// import mutation hook
import { useMutation } from '@apollo/client';

// import mutations 
// import {  } from '../../utils/mutations';

// import authentication
import Auth from '../../utils/auth';

// skillform component
const SkillForm = ({ profileId }) => {
  // state hook 
  const [skill, setSkill] = useState('');

  // mutation hook
  const [addSkill, { error }] = useMutation(ADD_SKILL);

  // handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  // return 
  return (
    <div>
      <h4>Endorse some more skills below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some skills..."
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse Skill
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse skills. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

// export SkillForm
export default SkillForm;
