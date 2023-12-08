// import apollo client 
import { gql } from '@apollo/client';

// add profile
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// add skill
export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

// user login 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// remove skill
export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

// create business
export const CREATE_BUSINESS = gql`
    mutation CreateBusiness($businessInput: BusinessInput!) {
        createBusiness(businessInput: $businessInput) {
            token
            business {
                id
                name
            }
        }
    }
`;

// business login 
export const LOGIN_BUSINESS = gql`
    mutation Mutation($email: String!, $password: String!) {
        loginBusiness(email: $email, password: $password) {
            token
            business {
                id
                name
            }
        }
    }
`;