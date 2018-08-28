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
      genre: "",
      UserId: " "
    };
  }
  displayUsers() {
    var data = this.props.getUsersQuery;
    if (data.loading) {
      return <option disabled>Loding Users...</option>;
    } else {
      return data.Users.map(User => {
        return (
          <option key={User.id} value={User.id}>
            {User.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addNodeMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        UserId: this.state.UserId
      },
      refetchQueries: [{ query: getNodesQuery }]
    });
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Node Name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>User:</label>
          <select onChange={e => this.setState({ UserId: e.target.value })}>
            <option>select User</option>
            {this.displayUsers()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

// export default graphql(getUsersQuery)(AddNode);

export default compose(
  graphql(getUsersQuery, { name: "getUsersQuery" }),
  graphql(addNodeMutation, { name: "addNodeMutation" })
)(AddNode);
