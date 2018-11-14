import React from 'react';
import * as api from './utils/api'

class AddComment extends React.Component {
  state = {
    newComment: '',
    created_by: this.props.userID
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='commentBody'> Comment : </label>
        <textarea onChange={this.handleChange} id='commentBody' type='text' value={this.state.newComment} />
        <p>Comment created by {this.props.user}</p>
        <button onClick={this.handleSubmit}>Submit</button>

      </form>
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