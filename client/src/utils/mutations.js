// import apollo client
import { gql } from '@apollo/client';

// create business
export const CREATE_BUSINESS = gql`
  mutation CreateBusiness($businessInput: BusinessInput!) {
    createBusiness(businessInput: $businessInput) {
      token
      business {
        _id
        name
      }
    }
  }
`;

export const UPDATE_BUSINESS = gql`
mutation Mutation($id: ID!, $businessUpdate: BusinessUpdate!) {
  updateBusiness(ID: $id, businessUpdate: $businessUpdate) {
    _id
    name
    email
    companyLogo
  }
}
`;

export const DELETE_BUSINESS = gql`
mutation Mutation($id: ID!) {
  deleteBusiness(ID: $id) {
     _id
    name
  }
}
`;

// business login
export const LOGIN_BUSINESS = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginBusiness(email: $email, password: $password) {
      token
      business {
        _id
        name
      }
    }
  }
`;

export const CREATE_INVOICE = gql`
  mutation Mutation($invoiceInput: InvoiceInput) {
    createInvoice(invoiceInput: $invoiceInput) {
      _id
    }
  }
`;

export const UPDATE_INVOICE = gql`
mutation Mutation($id: ID!, $invoiceUpdate: InvoiceUpdate) {
  updateInvoice(ID: $id, invoiceUpdate: $invoiceUpdate) {
    _id
    clientEmail
    serviceProvided
    serviceTitle
    clientName
    dateDue
    status
    totalBalance
  }
}
`;

export const DELETE_INVOICE = gql`
mutation Mutation($id: ID!) {
  deleteInvoice(ID: $id) {
    _id
  }
}
`;
