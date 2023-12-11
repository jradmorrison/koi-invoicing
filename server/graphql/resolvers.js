// import resolvers 
const businessResolver = require('./resolvers/businessResolver');
const invoiceResolver = require('./resolvers/invoiceResolver');

// combine resolvers
const resolvers = [
  businessResolver,
  invoiceResolver,
];

// export resolvers
module.exports = resolvers;