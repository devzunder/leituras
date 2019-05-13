import React, { Component } from "react";
import Posts from "./Posts";
import { connect } from "react-redux";
import { Dropdown, Button, NavItem } from "react-materialize";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <ul className="row">
          {this.props.postsIds.map(id => (
            <li key={id}>
              <Posts key={id} id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    postsIds: Object.keys(posts).sort(
      (a, b) => posts[b].timestamp - posts[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
