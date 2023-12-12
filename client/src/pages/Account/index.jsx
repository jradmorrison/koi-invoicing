import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import formatDate from '../../utils/dateFormatter';

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
        <>
          <div className="p-3">
            <a href="/dashboard">
              <Button>Back to dashboard</Button>
            </a>
            <div className="text-center fs-2">Account Details</div>
          </div>
          <div className="container">
            <p>Business Name: {business.name}</p>
            <p>Business email: {business.email}</p>
            <p>User Since: {formatDate(business.userSince)}</p>
          </div>
        </>
      )}
    </main>
  );
};

export default Account;
