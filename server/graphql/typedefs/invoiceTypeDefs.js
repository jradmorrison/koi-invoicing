module.exports = `
    type Invoice {
        id: ID
        businessID: String
        clientEmail: String
        totalBalance: String
        taxes: String
        status: String
    }

    input InvoiceInput {
        businessID: String
        clientEmail: String
        totalBalance: String
        taxes: String
        status: String
    }

    input InvoiceUpdate {
        totalBalance: String
        status: String
    }
`;