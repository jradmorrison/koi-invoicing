const businessTypeDefs= require('./typedefs/businessTypeDefs');
const serviceTypeDefs= require('./typedefs/serviceTypeDefs');
const clientTypeDefs= require('./typedefs/clientTypeDefs');
const contractTypeDefs= require('./typedefs/contractTypeDefs');
const invoiceTypeDefs= require('./typedefs/invoiceTypeDefs');

module.exports = `
    ${businessTypeDefs}
    ${serviceTypeDefs}
    ${clientTypeDefs}
    ${contractTypeDefs}
    ${invoiceTypeDefs}
    
    type Auth {
    token: ID!
    business: Business
    }
    
    type Query {
        getBusinessByID(ID : ID!): Business!
        
        getServiceByID(ID : ID!): Service!
        getServicesByBusiness(businessID : ID!): [Service]
        
        getClientByID(ID: ID!): Client!
        getClientsByBusiness(businessID: ID!): [Client]
        
        getContractByID(ID : ID!): Contract!
        getContractsByBusiness(businessID : ID!): [Contract]
        getContractsByClient(clientID : ID!): [Contract]
        
        getInvoiceByID(ID : ID!): Invoice!
        getInvoiceByBusiness(businessID: ID!): [Invoice]
    }
 
    type Mutation {
        createBusiness(businessInput: BusinessInput!): Auth
        updateBusiness(ID : ID!, businessUpdate: BusinessUpdate!): Business!
        deleteBusiness(ID : ID!): Business!
        
        createService(serviceInput: ServiceInput!): Service!
        updateService(ID : ID!, serviceUpdate: ServiceUpdate!): Service!
        deleteService(ID : ID!): Service!
        
        createClient(contractID: ID, clientInput: ClientInput!): Client!
        updateClient(clientUpdate: ClientUpdate!): Client!
        deleteClient(ID : ID!): Client!
        
        createContract(contractInput: ContractInput): Contract!
        updateContract(contractUpdate: ContractUpdate): Contract!
        deleteContract(ID : ID!): Contract!
        
        createInvoice(invoiceInput: InvoiceInput): Invoice!
        updateInvoice(invoiceUpdate: InvoiceUpdate): Invoice!
        deleteInvoice(ID : ID!): Invoice!
    }
`