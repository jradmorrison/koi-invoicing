import Button from '@mui/material/Button';
import { useState } from 'react';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateField } from '@mui/x-date-pickers/DateField';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//DATE PICKER
{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DateField']}>
  <DateField label="Basic date field" />
</DemoContainer>
</LocalizationProvider> */
}

const CreateInvoice = ({ visibility, toggleVisibility }) => {
  const [formState, setFormState] = useState({
    clientName: '',
    clientEmail: '',
    totalBalance: null,
    dateDue: '',
    serviceProvided: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [date, setDate] = useState(new Date());

  // return
  return (
    <div>
      <div className="fs-2 text-center">New Invoice</div>
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
        <label for="exampleFormControlInput1" className="form-label">
          Client Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="clientEmail"
          placeholder="name@example.com"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description of Service(s)
        </label>
        <textarea
          className="form-control"
          name="serviceProvided"
          rows="3"
          onChange={handleChange}></textarea>
      </div>
      <div className="input-group mb-3">
        <div>
          <label for="exampleFormControlTextarea1" className="form-label">
            Amount Due
          </label>
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
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Payment Due By
        </label>
        <div className="mb-3">
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <Button
          variant="outlined"
          color="error"
          onClick={() => toggleVisibility(!visibility)}>
          Cancel
        </Button>
        <Button variant="outlined">Create Invoice</Button>
      </div>
    </div>
  );
};

// export footer
export default CreateInvoice;
