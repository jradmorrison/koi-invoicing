module.exports = `
    type Invoice {
        _id: ID
        businessId: Business
        serviceTitle: String
        clientName: String
        clientEmail: String
        totalBalance: Float
        status: String
        dateDue: String
        serviceProvided: String
        createdOn: String
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