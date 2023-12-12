import { Navigate, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { DELETE_INVOICE } from '../utils/mutations';



// import packages
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

// import packages for pdf export



import { GET_ONE_INVOICE} from '../utils/queries';
import Auth from '../utils/auth';


import Header from '../components/Header';
import InvoiceToPDF from '../components/InvoiceToPDF';
import EditInvoice from '../components/EditInvoice';
import formatDate from '../utils/dateFormatter.js';

const demoInvoice = {
  invoiceID: '92842',
  businessID: '123',
  clientEmail: 'democlient@email.com',
  totalBalance: '100',
  status: 'Overdue',
  dateDue: '12/04/2023',
  serviceProvided: 'Created landing page for site',
  serviceTitle: 'Website Development',
  createdOn: '11/26/2023',
};

// invoice page component
const Invoice = () => {
  const params = useParams();
  const { loading, data } = useQuery(GET_ONE_INVOICE, {
    variables: { id: params.invoiceId },
  });
  
  const invoice = data?.getInvoiceByID || [];
  const business = invoice.businessId || [];
  
  const [deleteInvoice, { err }] = useMutation(DELETE_INVOICE);

  console.log(invoice);
  console.log(business);

  // for exporting to pdf
  const pdfExportComponent = useRef(null);
  const handleExportComponent = (event) => {
    pdfExportComponent.current.save();
  };

  // TODO: handle stripe checkout
  const handleMakePayment = (event) => {
    event.preventDefault();
  };

  const [visibility, setVisibility] = useState(false);

  const closeModal = () => {
    setVisibility(false);
    document.body.style.overflow = "auto";
  }

  const handleUpdateInvoice = async () => {
    console.log("update me!");
    setVisibility(true);
    //document.body.style.overflow = 'hidden';
  }

  const handleDeleteInvoice = async (invoiceID) => {
    try {
      const { data } = await deleteInvoice({
        variables: { invoiceID }
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // return
  return (
    <div>
      {/* <Header /> */}

      <div>
        <Button style={{ margin: '1rem', color: '#D9D9D9' }} variant="text">
          <Link to={'/dashboard'}>Back to Dashboard</Link>
        </Button>
      </div>
 
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem',
          }}>
          <PDFExport ref={pdfExportComponent} paperSize="A4">
            <InvoiceToPDF invoice={invoice} extras={pdfExportComponent} />
          </PDFExport>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: "#010144",
              paddingTop: '16rem',
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "2rem"
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#D9D9D9',
              }}>
              <h1 style={{ fontSize: '2.2rem', padding: '0' }}>
                Invoice - {invoice.serviceTitle}
              </h1>
              <p style={{ fontSize: '1.5rem', padding: '0', margin: '0' }}>
                Date Billed: {formatDate(invoice.createdOn)}
              </p>
              <p style={{ fontSize: '1.5rem', padding: '0', marginTop: '0' }}>
                Ref ID: {invoice._id}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#D9D9D9',
                padding: '1rem',
                borderRadius: '.3rem',
                minWidth: '20rem',
                minHeight: '4rem',
                marginBottom: '3rem',
              }}>
              <p>Due By: {formatDate(invoice.dateDue)}</p>
              <h4>${invoice.totalBalance}</h4>
            </div>
            <button
              onClick={handleExportComponent}
              style={{
                padding: '.5rem',
                borderRadius: '1rem',
                backgroundColor: '#FDC447',
                marginBottom: '1rem',
                textAlign: 'center',
                color: '#010144',
              }}>
              Export to PDF
            </button>
            {!Auth.loggedIn ? (<div>
              <button
                onClick={handleMakePayment}
                style={{
                  padding: '.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#FDC447',
                  color: '#010144',
                }}>
                Make Payment
              </button>
            </div>) : (<div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
              {visibility && (
                <>
                  <div className="overlay"></div>
                  <div
                    id="createInvoiceForm"
                    className="rounded-4 px-3 py-3 col-xl-6 col-sm-8 col-12 position-absolute top-50 start-50 translate-middle">
                    <EditInvoice visibility={visibility} toggleVisibility={setVisibility} invoice={invoice} />
                  </div>
                </>
              )}
              <button
                onClick={() => { handleUpdateInvoice() }}
                style={{
                  padding: '.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#FDC447',
                  textAlign: 'center',
                  color: '#010144',
                }}>
                Edit Invoice
              </button>
              <button
                onClick={() => { handleDeleteInvoice(invoice._id) }}
                style={{
                  padding: '.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#FDC447',
                  color: '#010144',
                }}>
                Delete Invoice
              </button>
            </div>)}
          </div>
        </div>
      )}
    </div>
  );
};

// export invoice page
export default Invoice;
