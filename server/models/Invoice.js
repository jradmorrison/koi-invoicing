// import mongoose
const { model, Schema} = require('mongoose');

// invoice schema
const invoiceSchema = new Schema({
  businessId: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  serviceTitle: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  totalBalance: {
    type: Number,
    required: true,
  },
  status: {
    type: String, 
    required: true,
    default: "PENDING",
  },
  dateDue: {
    type: Date,
    required: true,
  },
  serviceProvided: {
    type: String,
    required: true,
    default: "",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }
});

const Invoice = model('Invoice', invoiceSchema);

// export invoice schema
module.exports = Invoice;