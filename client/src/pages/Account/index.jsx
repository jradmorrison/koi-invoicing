import { useQuery } from '@apollo/client';

import { GET_CURRENT_BUSINESS } from '../../utils/queries';
import Auth from '../../utils/auth';


const Account = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const { loading, data } = useQuery(GET_CURRENT_BUSINESS);
  const business = data?.currentBusiness || {};
  console.log(business);

  return (
    <main className="min-vh-100 min-vw-100 bg-light">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Account;
