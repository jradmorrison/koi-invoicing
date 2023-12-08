import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      
    </main>
  );
};

export default Home;
