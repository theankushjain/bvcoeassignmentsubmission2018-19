import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import fetch from "isomorphic-unfetch";

import { getNodesQuery } from "../Queries/queries";
import NodeDetails from "./NodeDetails";

if (!process.browser) {
  global.fetch = fetch;
}

class NodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayNodes() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>loading nodes...</div>;
    } else {
<<<<<<< HEAD
      return this.props.data.allNodes.map(node => {
=======
      return this.props.data.nodes.map(node => {
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
        return (
          <li
            key={node.id}
            onClick={e => {
              this.setState({ selected: node.id });
            }}
          >
            {node.data}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div id="main">
        <div id="item1">
          <ul id="book-list">{this.displayNodes()}</ul>
        </div>
        <div id="item2">
          <NodeDetails nodeId={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default graphql(getNodesQuery)(NodeList);
