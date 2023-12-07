const { gql } = require('apollo-server');

module.exports = gql`
    type Service {
        id: ID
        businessID: String
        cost: String
        title: String
        description: String
    }

    input ServiceInput {
        businessID: String
        cost: String
        title: String
        description: String
    }
    input ServiceUpdate {
        cost: String
        title: String
        description: String
    }
`;