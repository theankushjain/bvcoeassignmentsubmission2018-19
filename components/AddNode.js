import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import fetch from "isomorphic-unfetch";

import {
  getUsersQuery,
  addNodeMutation,
  getNodesQuery
} from "../Queries/queries";

if (!process.browser) {
  global.fetch = fetch;
}

class AddNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userId: " ",
      data: "",
      referenceNodeId: "",
      genesisReferenceNodeId: ""
    };
  }
  displayUsers() {
    var data = this.props.getUsersQuery;
    if (data.loading) {
      return <option disabled>Loding Users...</option>;
    } else {
      return data.allUsers.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  displayNodes() {
    var data = this.props.getNodesQuery;
    if (data.loading) {
      return <option disabled>Loding Nodes...</option>;
    } else {
      return data.allNodes.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.data}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addNodeMutation({
      variables: {
        data: this.state.data,
        userId: this.state.userId,
        genesisReferenceNodeId: this.state.genesisReferenceNodeId,
        referenceNodeId: this.state.referenceNodeId
      },
      refetchQueries: [{ query: getNodesQuery }]
    });
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Node Data:</label>
          <input
            type="text"
            onChange={e => this.setState({ data: e.target.value })}
          />
        </div>
        <div className="field">
          <label>User:</label>
          <select onChange={e => this.setState({ userId: e.target.value })}>
            <option>select user</option>
            {this.displayUsers()}
          </select>
        </div>
        <div className="field">
          <label>Parent Node:</label>
          <select
            onChange={e => this.setState({ referenceNodeId: e.target.value })}
          >
            <option>select parent node</option>
            {this.displayNodes()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

// export default graphql(getAuthorsQuery)(AddBook);

export default compose(
  graphql(getUsersQuery, { name: "getUsersQuery" }),
  graphql(getNodesQuery, { name: "getNodesQuery" }),
  graphql(addNodeMutation, { name: "addNodeMutation" })
)(AddNode);
