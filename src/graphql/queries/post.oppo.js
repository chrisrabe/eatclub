import { gql } from '@apollo/client';

const POST_OPPO = gql`
  mutation PostOppo($oppoId: String!) {
    postOppo(oppoId: $oppoId) {
      id
    }
  }
`;

export default POST_OPPO;
