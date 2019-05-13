import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import Post from "./Post";
import NewPost from "./NewPost";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className="App">
            {this.props.loading === true ? null : (
              <Fragment>
                <Route path="/" exact component={Dashboard} />
                <Route path="/post/:id" component={Post} />
                <Route path="/new" component={NewPost} />
              </Fragment>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
