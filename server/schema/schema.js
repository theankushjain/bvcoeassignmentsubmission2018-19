const { ApolloServer, gql } = require("apollo-server-express");
const Node = require("./../models/node");
const User = require("./../models/user");

<<<<<<< HEAD
=======

>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
var typeDefs = gql`
  type User {
    id: ID!
    name: String!
    nodesOwned: [Node]
  }

  type Node {
    id: ID!
    nodeNumber: Int!
    data: String!
    referenceNode: Node
<<<<<<< HEAD
    childNodes: [Node]
=======
    childReferenceNode: [Node]
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
    genesisReferenceNode: Node
    hashValue: String
    owner: User
  }

  type Query {
    node(id: ID): Node
    user(id: ID): User
    allNodes: [Node]
    allUsers: [User]
<<<<<<< HEAD
    allChildNodes(id: ID): [Node]
    parentNode(id: ID): Node
    allNodesByUser(id: ID): [Node]
  }

  type Mutation {
    addUser(name: String!): User
    addGenesisNode(data: String!, userId: ID!): Node
    addChildNode(
      data: String!
      userId: ID!
      genesisReferenceNodeId: ID!
      referenceNodeId: ID!
    ): Node
=======
    allChildNodes(id:ID): [Node]
    parentNode(id:ID):Node
  }

  type Mutation {
    addUser(name:String!): User
    addGenesisNode(data:String!, userId:ID!): Node
    addChildNode(data:String!, userId:ID!, genesisReferenceId:ID!,referenceId:ID!): Node
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
  }
`;

var resolvers = {
  Query: {
    node: (root, { id }) => {
      return Node.findById(id);
    },

    user: (root, { id }) => {
      return User.findById(id);
    },

    allNodes: root => {
<<<<<<< HEAD
      return Node.find();
    },

    allUsers: root => {
      return User.find();
    },

    allChildNodes: (root, { id }) => {
      return Node.find({ referenceNode: id });
    },

    parentNode: (root, { id }) => {
      return Node.find({ childReferenceNode: id });
    },

    allNodesByUser: (root, { id }) => {
      return Node.find({ userId: id });
    }
  },
  Mutation: {
    addUser: (root, { name }) => {
      let user = new User({
        name: name
      });
      return user.save();
    },
    addGenesisNode: (root, { data, userId }) => {
      let genesisNode = new Node({
        data: data,
        userId: userId
      });
      return genesisNode.save();
    },
    addChildNode: (
      root,
      { data, userId, genesisReferenceNodeId, referenceNodeId }
    ) => {
      let childNode = new Node({
        data: data,
        userId: userId,
        genesisReferenceNodeId: genesisReferenceNodeId,
        referenceNodeId: referenceNodeId
      });
      return childNode.save();
    }
  },
  User: {
    nodesOwned: user => Node.find({ userId: user.id })
  },
  Node: {
    owner: node => User.findById(node.userId),
    genesisReferenceNode: node => Node.findById(node.genesisReferenceNodeId),
    referenceNode: node => Node.findById(node.referenceNodeId),
    childNodes: node => Node.find({ referenceNodeId: node.id })
=======
      return Book.find();
    },

    allUsers: root => {
      return Author.find();
    },

    allChildNodes: (root, { id }) => {
      return Node.find({referenceNode:id})
    },

    parentNode: (root, { id }) => {
      return Node.find({childReferenceNode:id})
    }
  },
  Mutation: {
    addUser:(root,{name})=>{
      let user = new User({
        name:name
      });
      return user.save();
    },
    addGenesisNode:(root,{data,userId})=>{
      let genesisNode = new Node({
        data:data,
        userId:userId
      });
      return genesisNode.save();
    },
    addChildNode:(root,{data,userId,genesisNodeId,referenceNodeId})=>{
      let genesisNode = new Node({
        data:data,
        userId:userId,
        genesisNodeId:genesisNodeId,
        referenceNodeId:referenceNodeId
      });
      return genesisNode.save();
    },
  },
  User: {
    nodesOwned: user => Node.find({ owner: user.id })
  },
  Node: {
    owner: node => User.findById(node.userId),
    genesisReferenceNode: node=> Node.findById(node.genesisNodeId),
    referenceNode: node=> Node.findById(node.referenceNodeId),
    childReferenceNode: node=>Node.find({referenceId:node.id})
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
  }
};

module.exports = new ApolloServer({ typeDefs, resolvers });
