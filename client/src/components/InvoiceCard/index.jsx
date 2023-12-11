import formatDate from '../../utils/dateFormatter.js';
import {useEffect, useState} from 'react';
const InvoiceCard = ({ invoice }) => {
  const [status, setStatus] = useState('PENDING');
  const now = new Date().valueOf();
  
  useEffect(() => {
    const due = invoice.dateDue;
    console.log(`compare : ${due} TO ${now}`);
    if (due < now && invoice.status !== 'COMPLETE') {
      setStatus('PAST DUE');
    } else if (due > now && invoice.status !== 'COMPLETE') {
      setStatus('PENDING');
    } else {
      setStatus(invoice.status);
    }
    console.log(status);
  }, []);

  // const dateDue = new Date(invoice.dateDue);

  let statusColor;
  if (status === 'PENDING') {
    statusColor = {
      color: 'orange',
    };
  } else if (status === 'COMPLETE') {
    statusColor = {
      color: 'green',
    };
  } else if (status === 'PAST DUE') {
    statusColor = {
      color: 'red',
    };
  }

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4>{invoice.serviceTitle}</h4>
        <h5>{invoice.clientName}</h5>
        <h5 className="card-title fs-6">Invoice # {invoice._id}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Due Date:
          {formatDate(invoice.dateDue)}
        </h6>
        <p className="card-text mb-1">{`Amount due: $${invoice.totalBalance}`}</p>
        <p className="card-text mb-1">
          Status: <span style={statusColor}>{status}</span>
        </p>
        <a href={`/invoice/${invoice._id}`} className="card-link">
          View Details
        </a>
      </div>
    </div>
  );
};

export default InvoiceCard;
