// import apollo client
import { gql } from '@apollo/client';

export const GET_CURRENT_BUSINESS = gql`
query Query {
  currentBusiness {
    _id
    companyLogo
    email
    name
    userSince
    invoices {
      _id
      clientEmail
      dateDue
      serviceProvided
      status
      totalBalance
    }
  }
}
`

export const GET_ONE_BUSINESS = gql`
query Query($id: ID!) {
  getBusinessByID(ID: $id) {
    _id
    name
    email
    companyLogo
    userSince
    invoices {
      _id
      clientEmail
      dateDue
      serviceProvided
      status
      totalBalance
    }
  }
}
`;

export const GET_ONE_INVOICE = gql`
query Query($id: ID!) {
  getInvoiceByID(ID: $id) {
    _id
    clientEmail
    dateDue
    serviceProvided
    status
    totalBalance
  }
}
`;

export const QUERY_INVOICES_BY_BUSINESS = gql`
  query getInvoiceByBusiness($businessId: ID!) {
    getInvoiceByBusiness(businessId: $businessId) {
      _id
      clientEmail
      dateDue
      serviceProvided
      status
      totalBalance
    }
  }
`;

// query user profile
// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
