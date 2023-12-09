import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from '../../utils/auth';
import './style.css';

import Button from '@mui/material/Button';
import Header from '../../components/Header';
import InvoiceCard from '../../components/InvoiceCard';
import CreateInvoice from '../../components/CreateInvoice';

import { QUERY_INVOICES_BY_BUSINESS } from '../../utils/queries';
import {GET_ONE_BUSINESS} from '../../utils/queries';

const Dashboard = () => {
  const [visibility, toggleVisibility] = useState(false);
  const business = getBusiness();
  const invoices = getInvoices();

  // TODO: Query current logged in user to get Business info
  // TODO: Pass in businessId as varibale to query invoices by business

  const getBusiness = () => {
    const {loading, data} = useQuery(GET_ONE_BUSINESS, {
      variables: {}
    })
    const business = data?.getBusinessByID || [];
    return business
  }
  
  const getInvoices = () => {
    const { loading, data } = useQuery(QUERY_INVOICES_BY_BUSINESS, {
      variables: {businessId},
    });
    const invoices = data?.getInvoiceByBusiness || [];
    return invoices;
  };

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="min-vh-100 min-vw-100 bg-light">
      {/* TODO: Pass in business info as props to header component to personalize businesses dashboard */}
      <Header />
      <div className="container mt-5">
        <div className="d-flex justify-content-end mb-5">
          <Button
            variant="outlined"
            onClick={() => {
              toggleVisibility(!visibility);
            }}>
            Create Invoice
          </Button>
        </div>
        <div>
          <InvoiceCard />
        </div>
      </div>
      {visibility ? (
        <>
          <div className="overlay"></div>
          <div
            id="createInvoiceForm"
            className="rounded-4 px-3 py-3 col-xl-6 col-sm-8 col-12 position-absolute top-50 start-50 translate-middle">
            <CreateInvoice
              visibility={visibility}
              toggleVisibility={toggleVisibility}
            />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Dashboard;
