import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import Button from '@mui/material/Button';

// import packages for pdf export 
import { useRef } from "react"

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

  // for exporting to pdf
  const pdfExportComponent = useRef(null);
  const handleExportComponent = (event) => {
    pdfExportComponent.current.save()
  }

  // TODO: handle stripe checkout
  const handleMakePayment = (event) => {
    event.preventDefault();
  }

  // return 
  return (
    <div>
      <Header />

      <div>
        <Button style={{ margin: "1rem", color: "#D9D9D9" }} variant="text">Back to Dashboard</Button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <InvoiceToPDF invoice={demoInvoice} extras={pdfExportComponent} />
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "16rem" }}>
          <div style={{ display: "flex", flexDirection: "column", color: "#D9D9D9" }}>
            <h1 style={{ fontSize: "3rem", padding: "0" }}>Invoice - {demoInvoice.businessID}</h1>
            <p style={{ fontSize: "1.5rem", padding: "0", margin: "0" }}>Date Billed: {demoInvoice.createdOn}</p>
            <p style={{ fontSize: "1.5rem", padding: "0", marginTop: "0" }}>Ref ID: {demoInvoice.invoiceID}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#D9D9D9", padding: "1rem", borderRadius: ".3rem", minWidth: "20rem", minHeight: "4rem", marginBottom: "3rem" }}>
            <p>Due {demoInvoice.dateDue}</p>
            <h4>${demoInvoice.totalBalance}</h4>
          </div>
          <button onClick={handleExportComponent} style={{ padding: ".5rem", borderRadius: "1rem", backgroundColor: "#FDC447", marginBottom: "1rem", textAlign: "center", color: "#010144" }}>Export to PDF</button>
          <button onClick={handleMakePayment} style={{ padding: ".5rem", borderRadius: "1rem", backgroundColor: "#FDC447", color: "#010144" }}>Make Payment</button>
        </div>
      </div>

    </div>
  );
};

// export invoice page 
export default Invoice;
