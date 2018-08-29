import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import fetch from "isomorphic-unfetch";

import { getNodeQuery } from "../Queries/queries";
import NodeList from "./NodeList";

if (!process.browser) {
  global.fetch = fetch;
}

class NodeDetails extends Component {
  displayNodeDetails() {
    console.log(this.props);
    const { node } = this.props.data;
    if (node) {
      return (
        <div>
          <h2>{node.data}</h2>
          <p>All Child Nodes of selected Node:</p>
          <ul className="other-books">
            {node.childNodes.map(item => {
              return <li key={item.id}>{item.data}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No Node Selected...</p>;
    }
  }
  render() {
    return <div id="book-details">{this.displayNodeDetails()}</div>;
  }
}

export default graphql(getNodeQuery, {
  options: props => {
    return {
      variables: {
        id: props.nodeId
      }
    };
  }
})(NodeDetails);
