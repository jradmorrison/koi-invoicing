// import mongoose
const { model, Schema} = require('mongoose');

// client schema
const clientSchema = new Schema({
  businessID: String,
  name: String,
  phone: String,
  email: String,
  password: String,
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
})

// export client schema
module.exports = model('Client', clientSchema);