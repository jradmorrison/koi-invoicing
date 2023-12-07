const { model, Schema} = require('mongoose');

const invoiceSchema = new Schema({
  businessID: String,
  clientEmail: String,
  totalBalance: String,
  taxes: String,
  status: String,
})

module.exports = model('Invoice', invoiceSchema);