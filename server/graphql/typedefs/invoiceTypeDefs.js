module.exports = `
    type Invoice {
        _id: ID
        businessId: ID
        serviceTitle: String
        clientName: String
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }

    input InvoiceInput {
        businessId: ID
        serviceTitle: String
        clientName: String
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }

    input InvoiceUpdate {
        serviceTitle: String
        clientName: String
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
    }
`;