// import mongoose
const { model, Schema} = require('mongoose');

// business schmea
const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  companyLogo: {
    type: String,
    unique: true,
  },
  // services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  // contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
  // clients: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  userSince: {
    type: Date,
    default: Date.now,
  },
  invoices: [{ type: Schema.Types.ObjectId, ref: 'Invoice' }]
});

// export business schema
module.exports = model('Business', businessSchema);