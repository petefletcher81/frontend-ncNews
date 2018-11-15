import React from 'react';
import * as api from './utils/api'

class AddComment extends React.Component {
  state = {
    newComment: '',
    created_by: this.props.userID
  }
  render() {
    return (
      <div className="formDiv">
        <form className='form' onSubmit={this.handleSubmit}>
          <label className="commentLabel" htmlFor='commentBody'> Post A Comment : </label>
          <textarea className="textArea" onChange={this.handleChange} id='commentBody' type='text' value={this.state.newComment} />
          <p>{this.props.user}</p>
          <button className="subButton" onClick={this.handleSubmit}>Submit</button>

        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    api.postComment(this.state, this.props.article_id).then(comment => {
      comment.created_by = this.props.userObj.username[0].username
      this.props.addComment(comment)
    })
    this.setState({
      newComment: ''
    })

  }
}

export default AddComment;