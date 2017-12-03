import gql from 'graphql-tag';
import moment from 'moment';

export const allFuturePollsQuery = gql`
  query allFuturePolls {
    allPolls(filter: {
      end_lt: "${moment().toISOString()}",
      trip: {
        id: "cj9wv26rpb8k80168thxlt98l"
      }
    }) {
      id
      question
      potentialVotes
      end
    }
  }
`;

export const createPollMutation = gql`
  mutation($end: DateTime!, $createdById: ID!) {
    createPoll(createdById: $createdById, end: $end) {
      id
    }
  }
`;

export const createVoteMutation = gql`
  mutation($pollId: ID!, $type: String!) {
    createVote(pollId: $pollId, type: $type) {
      id
    }
  }
`;
