import React from 'react';
import * as api from './utils/api';
import AddComment from './AddComment';
//import { navigate } from '@reach/router';
import Vote from './utils/Vote';
import './Comments.css';
import commentsHeader from './utils/assets/images/commentsHeader.png'


class Comments extends React.Component {
  state = {
    comments: [],
    loading: true,
    addComment: false,
    reRender: false
  }
  render() {

    //console.log(this.props.user.userID)
    return (
      <>
      <div>
        <img className="commentsHeaderImg" src={commentsHeader} alt="commentsHeader" />
      </div>

      <div>
        
        <button className='formBtn' onClick={this.showAddComment}>Add Comment</button>
        <p></p>
        {(this.state.addComment ?
          <AddComment article_id={this.props.article_id} userObj={this.props.user}
            user={this.props.user.username[0].username}
            userID={this.props.user.userID}
            addComment={this.addComment} /> : null)}
        <br></br>
        {this.state.comments.map(comment => {
          return <div className="commentCreated" key={comment._id}>{comment.body}
            <p>{comment.created_by.username}</p>
            <Vote section={'comments'} votes={comment.votes} comment_id={comment._id} />
            <p></p>
            {this.props.user.userID === comment.created_by._id ? <button className="deleteBtn" onClick={this.handleDelete} value={comment._id}>Delete</button> : null}
          </div>
        })}
      </div>
      </>
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