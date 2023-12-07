module.exports = `
    type Contract {
        id: ID
        businessID: String
        clientEmail: String
        clientID: String
        paymentPlan: String
        totalBalance: String
        standingBalance: String
        taxes: String
        availableServices: [Service]
        services: [Service]
        status: String
        allowPaymentPlan: Boolean
    }

    input ContractInput {
        businessID: String
        clientEmail: String
        totalBalance: String
        taxes: String
        availableServices: [ID]
        allowPaymentPlan: Boolean
    }

    input ContractUpdate {
        clientEmail: String
        clientID: String
        paymentPlan: String
        totalBalance: String
        standingBalance: String
        taxes: String
        availableServices: [ID]
        services: [ID]
        status: String
    }
`;