import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { QUERY_INVOICES_BY_BUSINESS } from '../../utils/queries';
import Auth from '../../utils/auth';
import './style.css';

import Button from '@mui/material/Button';
import Header from '../../components/Header';
import InvoiceCard from '../../components/InvoiceCard';
import CreateInvoice from '../../components/CreateInvoice';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_INVOICES_BY_BUSINESS);
  const invoices = data?.invoices || [];

  const [visibility, toggleVisibility] = useState(false);

  console.log(invoices);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="min-vh-100 min-vw-100 bg-light">
      <Header />
      <div className="container mt-5">
        <div className="d-flex justify-content-end">
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
            className="rounded-4 p-5 col-xl-6 col-sm-8 col-12 position-absolute top-50 start-50 translate-middle">
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
