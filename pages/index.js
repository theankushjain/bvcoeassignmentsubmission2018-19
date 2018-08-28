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
        <h1>Welcome to GraphQL Next.js Boilerplate</h1>
        <h2>Reading List</h2>
        <NodeList />
        <AddNode />
      </div>
    </Layout>
  </ApolloProvider>
);

export default Index;
