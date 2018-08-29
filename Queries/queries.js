import { gql } from "apollo-boost";

const getUsersQuery = gql`
  {
    allUsers {
      id
      name
    }
  }
`;

const getNodesQuery = gql`
  {
    allNodes {
      id
      data
    }
  }
`;

const addNodeMutation = gql`
  mutation(
    $data: String!
    $userId: ID!
    $genesisReferenceNodeId: ID!
    $referenceNodeId: ID!
  ) {
    addChildNode(
      data: $data
      userId: $userId
      genesisReferenceNodeId: $genesisReferenceNodeId
      referenceNodeId: $referenceNodeId
    ) {
      data
      id
    }
  }
`;

const getNodeQuery = gql`
  query($id: ID) {
    node(id: $id) {
      id
      data
      childNodes {
        data
      }
    }
  }
`;

const getAllNodesByUserQuery = gql`
  query($id: ID) {
    allNodesByUser(id: $id) {
      id
      data
    }
  }
`;

export {
  getUsersQuery,
  getNodesQuery,
  addNodeMutation,
  getNodeQuery,
  getAllNodesByUserQuery
};
