module.exports = `
    type Business {
        _id: ID
        name: String
        email: String
        password: String
        companyLogo: String
        userSince: String
        invoices: [Invoice]
    }

    input BusinessInput {
        name: String
        email: String
        password: String
        companyLogo: String
    }
    
    input BusinessUpdate {
        name: String
        email: String
        password: String
        companyLogo: String
    }
`;
