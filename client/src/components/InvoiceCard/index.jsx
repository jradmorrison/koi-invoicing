const InvoiceCard = ({ invoice }) => {
  let status;
  if (invoice.status == 'PENDING') {
    status = {
      color: 'orange',
    };
  } else if (invoice.status == 'COMPLETE') {
    status = {
      color: 'green',
    };
  } else if (invoice.status == 'PAST-DUE') {
    status = {
      color: 'red',
    };
  }

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Invoice # {invoice._id}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
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
