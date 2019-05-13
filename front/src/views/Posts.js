import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/functions";
import { NavLink } from "react-router-dom";
import { Col, Card } from "react-materialize";

//import { TiArrowBackOutline } from 'react-icons/ti/index.js'
//import { TiHeartOutline } from 'react-icons/ti/index.js'
//import { TiHeartFullOutline } from 'react-icons/ti/index.js'

class Posts extends Component {
  toPost = (e, id) => {
    e.preventDefault();
    //this.props.history.push(`/tweet/${id}`)
  };
  render() {
    const { post } = this.props;
    if (post === null) {
      return <p>This Tweet doesn't exist </p>;
    }

    const { title, timestamp, author, category, id } = post;

    return (
      <div>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            key={id}
            id={id}
            title={title}
            actions={[<NavLink to={`post/${id}`}>Ver Post</NavLink>]}
          >
            <ul>
              <li>Autor: {author}</li>
              <li className="text-low">Data: {formatDate(timestamp)}</li>
              <li className="text-low">Categoria: {category}</li>
            </ul>
          </Card>
        </Col>
      </div>
    );
  }
}

function mapStateToProps({ posts }, { id }) {
  const post = posts[id];
  //const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    //authedUser,
    post: post
      ? post /*formatTweet(tweet, /*users[tweet.author], authedUser, parentTweet ) */
      : null
  };
}

export default connect(mapStateToProps)(Posts);
