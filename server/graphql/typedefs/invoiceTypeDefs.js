module.exports = `
    type Invoice {
        _id: ID
        businessID: ID
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }

    input InvoiceInput {
        businessID: ID
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }

    input InvoiceUpdate {
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }
`;