// import mongoose
const { model, Schema} = require('mongoose');

// business schmea
const businessSchema = new Schema({
  name: String,
  email: String,
  password: String,
  companyLogo: String,
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
  clients: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  createdAt: String,
})

// export business schema
module.exports = model('Business', businessSchema);