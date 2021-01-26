import { gql } from '@apollo/client';

const GetOpportunities = gql`
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

export default GetOpportunities;
