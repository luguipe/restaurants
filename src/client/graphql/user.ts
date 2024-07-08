import { gql } from "@apollo/client";

export const SIGN_UP_MUTATION = gql`
  mutation UserSignUp($input: UserSignUpInput!) {
    userSignUp(input: $input) {
      _id
      firstName
      lastName
      email
      dob
      active
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation UserSignUp($input: UserSignUpInput!) {
    userSignUp(input: $input) {
      emailmail
      Password
    }
  }
`;