import Layout from "../components/Layout";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import NodeList from "../components/NodeList";
import AddNode from "../components/AddNode";

//Apollo Client Setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Index = props => (
  <ApolloProvider client={client}>
    <Layout>
      <div id="main">
<<<<<<< HEAD
        <h1>Here are the Nodes Created By you.</h1>
=======
        <h1>Welcome to GraphQL Next.js Boilerplate</h1>
        <h2>Reading List</h2>
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
        <NodeList />
        <AddNode />
      </div>
    </Layout>
  </ApolloProvider>
);

export default Index;
