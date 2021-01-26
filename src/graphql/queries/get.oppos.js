import { gql } from '@apollo/client';

const OPPORTUNITIES = gql`
  query GetOpportunities {
    opposForToday(restId: "chris") {
      objectId
      discount
      startTime
      endTime
      prediction
    }
  }
`;

export default OPPORTUNITIES;
