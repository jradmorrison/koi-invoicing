import Button from '@mui/material/Button';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { UPDATE_INVOICE } from '../../utils/mutations';

const EditInvoice = ({ visibility, toggleVisibility, invoice }) => {
  const [formState, setFormState] = useState({
    serviceTitle: invoice.serviceTitle,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    totalBalance: invoice.totalBalance,
    serviceProvided: invoice.serviceProvided,
  });

  const [updateInvoice, { error }] = useMutation(UPDATE_INVOICE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const setDate = (date) => {
    setFormState({
      ...formState,
      dateDue: date,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const invoiceInput = {
      clientName: formState.clientName,
      clientEmail: formState.clientEmail,
      totalBalance: parseFloat(formState.totalBalance),
      dateDue: formState.dateDue,
      serviceTitle: formState.serviceTitle,
      serviceProvided: formState.serviceProvided,
    };

    try {
      const { data } = await updateInvoice({
        variables: { id: invoice._id, invoiceUpdate: invoiceInput },
      });

      document.location.assign('/invoice/' + invoice._id);
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    toggleVisibility(false);
    document.body.style.overflow = 'auto';
  };

  // return
  return (
    <div>
      <div className="text-end">
        <Button variant="outlined" color="error" onClick={closeModal}>
          ❌
        </Button>
      </div>
      <div className="p-3">
        <div className="fs-2 text-center mb-3">New Invoice</div>
        <div className="mb-3">
          <label className="form-label">Client Full Name</label>
          <input
            type="text"
            className="form-control"
            name="clientName"
            onChange={handleChange}
            placeholder="John Doe"
            value={formState.clientName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Client Email address</label>
          <input
            type="email"
            className="form-control"
            name="clientEmail"
            placeholder="name@example.com"
            onChange={handleChange}
            value={formState.clientEmail}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Service title</label>
          <input
            type="text"
            className="form-control"
            name="serviceTitle"
            placeholder="Short title"
            onChange={handleChange}
            value={formState.serviceTitle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description of Service(s)</label>
          <textarea
            className="form-control"
            name="serviceProvided"
            rows="3"
            onChange={handleChange}
            value={formState.serviceProvided}></textarea>
        </div>
        <div className="d-flex justify-content-around">
          <div className="mb-3">
            <div>
              <label className="form-label">Amount Due</label>
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                name="totalBalance"
                onChange={handleChange}
                value={formState.totalBalance}
              />
            </div>
          </div>
          <div className="mb-3 my-auto">
            <label className="form-label">Payment Due By</label>
            <div className="mb-3">
              <DatePicker
                selected={formState.dateDue}
                onChange={(date) => setDate(date)}
                value={formState.dateDue}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <Button variant="outlined" onClick={handleFormSubmit}>
            Update Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

// export footer
export default EditInvoice;
