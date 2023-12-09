// import mongoose
const { model, Schema} = require('mongoose');

// invoice schema
const invoiceSchema = new Schema({
  businessId: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
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
    default: Date.now,
  },
  serviceProvided: {
    type: String,
    required: true,
    default: "",
  },
});

const Invoice = model('Invoice', invoiceSchema);

// export invoice schema
module.exports = Invoice;