const businessResolver = require('./resolvers/businessResolver');
const clientResolver = require('./resolvers/clientResolver');
const serviceResolver = require('./resolvers/serviceResolver');
const contractResolver = require('./resolvers/contractResolver');
const invoiceResolver = require('./resolvers/invoiceResolver');

const resolvers = [
  businessResolver,
  clientResolver,
  serviceResolver,
  contractResolver,
  invoiceResolver,
];

module.exports = resolvers;