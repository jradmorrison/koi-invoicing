const { model, Schema} = require('mongoose');

const contractSchema = new Schema({
  businessID: String,
  clientEmail: String,
  clientID: String,
  paymentPlan: String,
  totalBalance: String,
  standingBalance: String,
  taxes: String,
  availableServices: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  status: String,
  allowPaymentPlan: Boolean,
})

module.exports = model('Contract', contractSchema);