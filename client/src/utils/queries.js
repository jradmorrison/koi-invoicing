// import apollo client
import { gql } from '@apollo/client';

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
