module.exports = `
    type Invoice {
        _id: ID
        businessId: ID
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }

    input InvoiceInput {
        businessId: ID
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