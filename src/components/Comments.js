import React from 'react';
import * as api from './utils/api';
import AddComment from './AddComment';
import Aux from './Aux'
import VoteComment from './utils/VoteComment';
import './Comments.css';
import commentsHeader from './utils/assets/images/commentsHeader.png';
import PropTypes from 'prop-types';


class Comments extends React.Component {
  state = {
    comments: [],
    loading: true,
    addComment: false,
    reRender: false
  }
  render() {

    const { article_id, user } = this.props

    return (
      <Aux>

        <Aux>
          <button className='formBtn' onClick={this.showAddComment}>Add Comment</button>

          {(this.state.addComment ?
            <AddComment article_id={article_id} userObj={user}
              user={user.username[0].username}
              userID={user.userID}
              addComment={this.addComment} /> : null)}
        </Aux>

        <div>
          <img className="commentsHeaderImg" src={commentsHeader} alt="commentsHeader" />
        </div>

        <div className='formLayout'>
          {this.state.comments.map(comment => {
            return <Aux>
              <div className="commentCreated" key={comment._id}>{comment.body}
                <p></p>

                <p className="createdBy">Created By: <strong>{comment.created_by.username}</strong></p>



                {user.userID === comment.created_by._id ? <button className="deleteBtn" onClick={this.handleDelete} value={comment._id}>Delete</button> : null}


                <div><VoteComment section={'comments'} votes={comment.votes} comment_id={comment._id} /></div>
              </div>

            </Aux>
          })}
        </div>

      </Aux>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState !== this.state) {
      this.fetchComments()
    }
  }

  handleDelete = (event) => {
    // console.log(event.target.value)
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

Comments.propTypes = {
  article_id: PropTypes.string,
  user: PropTypes.object,
}

export default Comments;