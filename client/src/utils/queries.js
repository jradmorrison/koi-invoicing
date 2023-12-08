// import apollo client
import { gql } from '@apollo/client';

export const QUERY_INVOICES_BY_BUSINESS = gql`
  query getInvoiceByBusiness($businessId: ID!) {
    getInvoiceByBusiness(businessID: $businessId) {
      _id
      clientEmail
      dateDue
      serviceProvided
      status
      totalBalance
    }
  }
`;

// query profiles
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

// query profile
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

// query user profile
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
