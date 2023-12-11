import { useQuery } from '@apollo/client';
import { GET_CURRENT_BUSINESS } from '../../utils/queries';

const Account = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  const { loading, data } = useQuery(GET_CURRENT_BUSINESS);
  const business = data?.currentBusiness || {};
  return (
  <>
  </>
  );
};

module.exports = Account;
