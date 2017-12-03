import gql from 'graphql-tag';

export const currentUserQuery = gql`
  query currentUser {
    user {
      id
    }
  }
`;

export const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const registerMutation = gql`
  mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      firstName: $firstName
      lastName: $lastName
    ) {
      id
    }
  }
`;
