import React, { Component } from "react";
import { Row, Input } from "react-materialize";
class NewComment extends Component {
  render() {
    return (
      <div>
        <h5>Comentar</h5>
        <form>
          <Row>
            <Input s={6} label="Author" />
            <Input s={12} label="Comentário" />
          </Row>
          <button
            className="btn"
            type="submit"
            /*disabled={body === ''}*/
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
export default NewComment;
