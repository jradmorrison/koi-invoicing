// import type defs 
const businessTypeDefs= require('./typedefs/businessTypeDefs');
const invoiceTypeDefs= require('./typedefs/invoiceTypeDefs');

// export typedefs
module.exports = `
    ${businessTypeDefs}
    ${invoiceTypeDefs}
    
    type Auth {
        token: ID!
        business: Business
    }
    
    type Query {
        currentBusiness: Business
        getBusinessByID(ID : ID!): Business!
        
        getInvoiceByID(ID: ID!): Invoice
        getInvoiceByBusiness(businessId: ID!): [Invoice]
    }
 
    type Mutation {
        createBusiness(businessInput: BusinessInput!): Auth
        updateBusiness(ID : ID!, businessUpdate: BusinessUpdate!): Business!
        deleteBusiness(ID : ID!): Business!
        
        loginBusiness(email: String!, password: String!): Auth
        
        createInvoice(invoiceInput: InvoiceInput): Invoice!
        updateInvoice(ID: ID!, invoiceUpdate: InvoiceUpdate): Invoice!
        deleteInvoice(ID : ID!): Invoice!
    }
`