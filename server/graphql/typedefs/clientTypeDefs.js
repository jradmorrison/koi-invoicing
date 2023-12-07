const { gql } = require('apollo-server');

module.exports = gql`
    type Client {
        id: ID
        businessID: String
        name: String
        phone: String
        email: String
        password: String
        contracts: [Contract]
    }

    input ClientInput {
        businessID: String
        name: String
        phone: String
        email: String
        password: String
    }

    input ClientUpdate {
        name: String
        phone: String
        email: String
        password: String
    }
`;