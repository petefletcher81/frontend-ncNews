import React from 'react';
import * as api from './utils/api';
import AddComment from './AddComment';
//import { navigate } from '@reach/router';
import Vote from './utils/Vote'


class Comments extends React.Component {
  state = {
    comments: [],

    loading: true,
    addComment: false,
    reRender: false
  }
  render() {

    return (
      <div>
        <h1>Comments</h1>
        <button onClick={this.showAddComment}>Add Comment</button>
        <p></p>
        {(this.state.addComment ?
          <AddComment article_id={this.props.article_id} userObj={this.props.user}
            user={this.props.user.username[0].username}
            userID={this.props.user.userID}
            addComment={this.addComment} /> : null)}
        <br></br>
        {this.state.comments.map(comment => {
          return <div key={comment._id}>{comment.body}
            {console.log(comment)}
            <p>{comment.created_by.username}</p>
            <Vote section={'comments'} votes={comment.votes} comment_id={comment._id} />
            <p></p>
            <button onClick={this.handleDelete} value={comment._id}>Delete</button>
          </div>
        })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {

    if (prevState !== this.state) {
      this.fetchComments()
    }
  }

  handleDelete = (event) => {
    console.log(event.target.value)
    const commentID = event.target.value
    api.deleteComment(commentID).then(res =>
      // navigate(`/articles`)
      this.setState({
        reRender: true
      }))
  }

  addComment = (newComment) => {
    console.log(newComment, 'this is in comments')
    this.setState({
      comments: [newComment, ...this.state.comments]
    })
  }

  showAddComment = () => {
    const doesShow = this.state.addComment;
    this.setState({ addComment: !doesShow })
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getComments(this.props.article_id).then(articleComments => {
      this.setState({
        comments: articleComments,
        loading: false
      })
    });
  }
}

export default Comments;