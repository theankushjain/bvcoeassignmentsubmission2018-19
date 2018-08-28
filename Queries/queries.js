import { gql } from "apollo-boost";

const getUsersQuery = gql`
  {
    allusers {
      id
      name
    }
  }
`;

const getNodesQuery = gql`
  {
    allnodes {
      id
      name
    }
  }
`;

const addNodeMutation = gql`
  mutation($name: String!, $genre: String!, $userId: ID!) {
    addBook(name: $name, genre: $genre, userId: $userId) {
      name
      id
    }
  }
`;

const getNodeQuery = gql`
  query($id: ID) {
    node(id: $id) {
      id
      data
      user {
        id
        name
        nodes {
          name
          id
        }
      }
    }
  }
`;

export { getUsersQuery, getNodesQuery, addNodeMutation, getNodeQuery };
