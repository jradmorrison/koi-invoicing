module.exports = `
    type Business {
        id: ID
        name: String
        email: String
        password: String
        companyLogo: String
        createdAt: String
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