import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Auth from '../../utils/auth';
import './style.css';

import Button from '@mui/material/Button';
import Header from '../../components/Header';
import InvoiceCard from '../../components/InvoiceCard';
import CreateInvoice from '../../components/CreateInvoice';

import { GET_CURRENT_BUSINESS } from '../../utils/queries';


const Dashboard = () => {
  console.log("test");
  const [visibility, toggleVisibility] = useState(false);
  const { loading, data, refetch } = useQuery(GET_CURRENT_BUSINESS);
  const business = data?.currentBusiness || {};

  console.log(business);

  const { invoices } = business;
  console.log(invoices);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (visibility == true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <main className="min-vh-100 min-vw-100 bg-light">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Header
            businessName={business.name}
            businessId={business._id}
            logo={business.companyLogo}
          />
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
            <div className="d-flex flex-wrap justify-content-center">
              {invoices.length ? (
                <>
                  {invoices.map((invoice) => (
                    <InvoiceCard key={invoice._id} invoice={invoice} />
                  ))}
                </>
              ) : (
                <div className="text-center">No invoices yet!</div>
              )}
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
                  businessId={business._id}
                  refetch={refetch}
                />
              </div>
            </>
          ) : (
            <div></div>
          )}
        </>
      )}
    </main>
  );
};

export default Dashboard;
