const InvoiceCard = () => {
  return (
    <div className="card" style={{ width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Invoice title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Due Date</h6>
        <p className="card-text">Amount</p>
        <a href="#" className="card-link">
          View Details
        </a>
      </div>
    </div>
  );
};

export default InvoiceCard;
