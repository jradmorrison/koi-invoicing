import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
// import {  } from '../utils/queries';
import Header from '../components/Header'


const Invoice = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <Header />
      <div><Button variant="text">Back to Dashboard</Button></div>
      <div>
        <p>Preview?</p>
      </div>
      <div>
        <h1>Invoice Name</h1>
        <h4>Date Billed xx/xx/xxxx</h4>
        <h4>Invoice ID: XXXXX </h4>
        <div>
            <h3>Due xx/xx/xxxx </h3>
            <h2>$$$$</h2>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </main>
  );
};

export default Invoice;
