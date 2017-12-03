import gql from 'graphql-tag';

export const createPollMutation = gql`
  mutation($end: DateTime!, $createdById: ID!) {
    createPoll(createdById: $createdById, end: $end) {
      id
    }
  }
`;
