import { gql } from "apollo-boost";

const getUsersQuery = gql`
  {
<<<<<<< HEAD
    allUsers {
=======
    allusers {
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
      id
      name
    }
  }
`;

const getNodesQuery = gql`
  {
<<<<<<< HEAD
    allNodes {
      id
      data
=======
    allnodes {
      id
      name
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
    }
  }
`;

const addNodeMutation = gql`
<<<<<<< HEAD
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
=======
  mutation($name: String!, $genre: String!, $userId: ID!) {
    addBook(name: $name, genre: $genre, userId: $userId) {
      name
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
      id
    }
  }
`;

const getNodeQuery = gql`
  query($id: ID) {
    node(id: $id) {
      id
      data
<<<<<<< HEAD
      childNodes {
        data
=======
      user {
        id
        name
        nodes {
          name
          id
        }
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
      }
    }
  }
`;

<<<<<<< HEAD
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
=======
export { getUsersQuery, getNodesQuery, addNodeMutation, getNodeQuery };
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
