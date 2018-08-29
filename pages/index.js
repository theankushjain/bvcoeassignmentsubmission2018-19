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
        <h1>Here are the Nodes Created By you.</h1>
        <NodeList />
        <AddNode />
      </div>
    </Layout>
  </ApolloProvider>
);

export default Index;
