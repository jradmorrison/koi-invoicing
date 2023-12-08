// import mongoose
const { model, Schema} = require('mongoose');

// invoice schema
const invoiceSchema = new Schema({
  businessID: String,
  clientEmail: String,
  totalBalance: String,
  taxes: String,
  status: String,
});

// export invoice schema
module.exports = model('Invoice', invoiceSchema);