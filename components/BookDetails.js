import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import fetch from "isomorphic-unfetch";

import { getnodeQuery } from "../Queries/queries";
import nodeList from "./NodeList";

if (!process.browser) {
  global.fetch = fetch;
}

class NodeDetails extends Component {
  displaynodeDetails() {
    const { node } = this.props.data;
    if (node) {
      return (
        <div>
          <h2>{node.name}</h2>
          <p>{node.genre}</p>
          <p>{node.user.name}</p>
          <p>All nodes by this user:</p>
          <ul className="other-books">
            {node.user.nodes.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No node selected...</p>;
    }
  }
  render() {
    return <div id="book-details">{this.displaynodeDetails()}</div>;
  }
}

export default graphql(getnodeQuery, {
  options: props => {
    return {
      variables: {
        id: props.nodeId
      }
    };
  }
})(NodeDetails);
