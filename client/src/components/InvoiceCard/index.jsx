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
    <div className="card m-3" style={{ width: '20rem' }}>
      <div className="card-body">
        <h4 className="fw-bold">Header</h4>
        <h5 className="text-body-secondary">Client Name</h5>
        <h6 className="card-subtitle mb-3 text-body-secondary">Due Date:
          {invoice.dateDue}
        </h6>
        <p className="card-text mb-1">{`Amount due: $${invoice.totalBalance}`}</p>
        <p className="card-text mb-1">
          Status: <span style={status}>{invoice.status}</span>
        </p>
        <h5 className="card-title fs-6 mt-2 ">Invoice # {invoice._id}</h5>
        <a href={`/invoice/${invoice._id}`} className="card-link">
          View Details
        </a>
      </div>
    </div>
  );
};

export default InvoiceCard;
