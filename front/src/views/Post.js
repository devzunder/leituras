import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/functions";
import { Col, Card } from "react-materialize";
import NewComment from "./NewComment";

//import { TiArrowBackOutline } from 'react-icons/ti/index.js'
//import { TiHeartOutline } from 'react-icons/ti/index.js'
//import { TiHeartFullOutline } from 'react-icons/ti/index.js'

// A se modificar, esse irá virar a View do POST relacionada a um determinado post

class Post extends Component {
  render() {
    const post = {
      id: "6ni6ok3ym7mf1p33lnez",
      timestamp: 1468479767190,
      title: "Learn Redux in 10 minutes!",
      body: "Just kidding. It takes more than 10 minutes to learn technology.",
      author: "thingone",
      category: "redux",
      voteScore: -5,
      deleted: false,
      commentCount: 0
    };
    if (post === null) {
      return <p>This Tweet doesn't exist </p>;
    }

    return (
      <div>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            key={post.id}
            title={post.title}
          >
            <div style={{ position: "right" }}>
              <button>editar</button>
              <button>delete</button>
            </div>
            <ul>
              <li className="text-low">
                <strong>Autor: {post.author}</strong>
              </li>
              <li className="text-low">Data: {formatDate(post.timestamp)}</li>
              <li className="text-low">Categoria: {post.category}</li>
              <li className="text-low">{post.body}</li>
            </ul>
          </Card>
          <NewComment />
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

export default connect(mapStateToProps)(Post);
