import Button from '@mui/material/Button';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateField } from '@mui/x-date-pickers/DateField';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {CREATE_INVOICE} from '../../utils/mutations';

//DATE PICKER
{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DateField']}>
  <DateField label="Basic date field" />
</DemoContainer>
</LocalizationProvider> */
}
//* We need to pass in the businesses _id and set it in form state so it can be used when we create the invoice
const CreateInvoice = ({ visibility, toggleVisibility }) => {
  let date;
  const [formState, setFormState] = useState({
  //*  businessId: props.businessId,
    clientName: '',
    clientEmail: '',
    totalBalance: null,
    dateDue: '',
    serviceProvided: '',
  });

  const [createInvoice, { error }] = useMutation(CREATE_INVOICE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //! Bug fix: When setting date from date picker, form state gets updated properly but the date selcted in the date picker resets to empty so the user might think its not working. It is though
  const setDate = (date) => {
    setFormState({
      ...formState,
      dateDue: date,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      const {data} = await createInvoice({
        variables: { ...formState },
      });
      console.log(data);
    } catch (err) {
      console.error(err)
    }

  }

  // return
  return (
    <div>
      <div className="text-end">
        <Button
          variant="outlined"
          color="error"
          onClick={() => toggleVisibility(!visibility)}>
          ❌
        </Button>
      </div>
      <div></div>
      <div className="p-3">
        <div className="fs-2 text-center mb-3">New Invoice</div>
        <div className="mb-3">
          <label className="form-label">Client Full Name</label>
          <input
            type="text"
            className="form-control"
            name="clientName"
            onChange={handleChange}
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description of Service(s)</label>
          <textarea
            className="form-control"
            name="serviceProvided"
            rows="3"
            onChange={handleChange}></textarea>
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
              />
            </div>
          </div>
          <div className="mb-3 my-auto">
            <label className="form-label">Payment Due By</label>
            <div className="mb-3">
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <Button variant="outlined" onClick={handleFormSubmit}>Create Invoice</Button>
        </div>
      </div>
    </div>
  );
};

// export footer
export default CreateInvoice;
