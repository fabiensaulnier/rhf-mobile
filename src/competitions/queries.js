import gql from 'graphql-tag';
import moment from 'moment';

export const allFutureEventsQuery = gql`
  query allFutureEvents {
    allEvents(filter: {
      start_gt: "${moment().toISOString()}",
      trip: {
        id: "cj9wv26rpb8k80168thxlt98l"
      }
    }) {
      id
      name
      type
      image
      start
      end
    }
  }
`;

export const createEventMutation = gql`
  mutation($start: DateTime!, $end: DateTime!, $location: Json!, $createdById: ID!) {
    createEvent(start: $start, end: $end, location: $location, createdById: $createdById) {
      id
    }
  }
`;
