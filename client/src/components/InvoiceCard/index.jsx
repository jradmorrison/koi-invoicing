const InvoiceCard = ({ invoice }) => {
  const now = new Date();
  
  if (invoice.dateDue < now && invoice.status !== 'COMPLETE') {
    invoice.status = 'PAST DUE';
  } else if (invoice.dateDue > now && invoice.status !== 'COMPLETE') {
    invoice.status = 'PENDING';
  }

  // const dateDue = new Date(invoice.dateDue);

  let status;
  if (invoice.status == 'PENDING') {
    status = {
      color: 'orange',
    };
  } else if (invoice.status == 'COMPLETE') {
    status = {
      color: 'green',
    };
  } else if (invoice.status == 'PAST DUE') {
    status = {
      color: 'red',
    };
  }

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4>Short Title</h4>
        <h5 className="card-title fs-6">Invoice # {invoice._id}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Due Date:
          {invoice.dateDue}
        </h6>
        <p className="card-text mb-1">{`Amount due: $${invoice.totalBalance}`}</p>
        <p className="card-text mb-1">
          Status: <span style={status}>{invoice.status}</span>
        </p>
        <a href={`/invoice/${invoice._id}`} className="card-link">
          View Details
        </a>
      </div>
    </div>
  );
};

export default InvoiceCard;
