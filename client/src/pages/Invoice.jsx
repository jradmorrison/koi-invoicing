import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import Button from '@mui/material/Button';

import { useQuery } from '@apollo/client';
// import {  } from '../utils/queries';
import Header from '../components/Header'

import InvoiceToPDF from '../components/InvoiceToPDF'

const demoInvoice = {
  invoiceID: "92842",
  businessID: "123",
  clientEmail: "democlient@email.com",
  totalBalance: "100",
  status: "Overdue",
  dateDue: "12/04/2023",
  serviceProvided: "Website Development",
  createdOn: "11/26/2023"
}

// invoice page component
const Invoice = () => {

  // make sure business logged in
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // return 
  return (
    <div>
      <Header />

      <div>
        <Button style={{margin: "1rem", color: "#D9D9D9"}} variant="text">Back to Dashboard</Button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "2rem"}}>
        <InvoiceToPDF invoice={demoInvoice} />
      </div>

    </div>
  );
};

// export invoice page 
export default Invoice;
