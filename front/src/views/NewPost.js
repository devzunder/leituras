import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Input } from "react-materialize";
import { generateUID } from "../utils/functions";
import { handleAddPost } from "../actions/posts";

class NewPost extends Component {
  state = {
    body: "",
    title: "",
    category: "react",
    author: "",
    toHome: false
  };
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    let data = {
      id: generateUID(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      timestamp: Date.now()
    };
    console.log(data);
    dispatch(handleAddPost(data));

    this.setState(() => ({
      body: "",
      title: "",
      category: "react",
      author: "",
      toHome: true
    }));
  };

  render() {
    const { body, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Criar um novo post!</h3>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Input
              s={12}
              label="Título"
              onChange={this.handleChange("title")}
            />
            <Input
              s={12}
              type="select"
              label="Categoria"
              defaultValue="1"
              onChange={this.handleChange("category")}
            >
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </Input>
            <Input
              type="text"
              label="Autor"
              s={12}
              onChange={this.handleChange("author")}
            />
            <Input
              type="text"
              label="Postagem"
              s={12}
              onChange={this.handleChange("body")}
            />
          </Row>
          <button className="btn" type="submit" disabled={body === ""}>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewPost);
