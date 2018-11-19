import React from 'react';
import * as api from './utils/api';
import './Article.css';
import Comments from './Comments';
import Vote from './utils/Vote.js';
import moment from 'moment';
import PropTypes from 'prop-types';


class Article extends React.Component {
  state = {
    singleArticle: {},
    loading: true,
    commentsToggle: false,
    addComment: false,
    reRender: false
  }
  render() {
    const { loading, singleArticle, commentsToggle } = this.state;
    const { article_id, user } = this.props

    if (loading) return <div><h2>Loading...</h2></div>
    console.log(typeof article_id, typeof user)

    return (
      <div className="mainBody">

        <div className="userBodyArticle">
          <h3>Created By : {singleArticle.article.created_by.username}</h3>
        </div>
        <p></p>
        <div className="articleMainBodySingle">
          <div>
            <h1>{singleArticle.article.title}</h1>
            <div>{singleArticle.article.body}</div>
            <p>{singleArticle.article.comment_count}</p>
            <p><strong>{moment(singleArticle.article.created_at).format("MMM Do YY")}</strong></p>
          </div>

          <div>
            <Vote article_id={article_id} votes={singleArticle.article.votes} section={'articles'} />
          </div>
        </div>


        <button className="showCommentBtn" onClick={this.toggleComments}>Show comments</button>
        {(commentsToggle ? <Comments article_id={singleArticle.article._id} user={user} /> : null)}
      </div>
    );
  }


  toggleComments = () => {
    const doesShow = this.state.commentsToggle;
    this.setState({ commentsToggle: !doesShow })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.reRender !== this.state.reRender) {
      this.fetchArticle()
    }
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props
    api.getArticle(article_id).then(article => {
      this.setState({
        singleArticle: article,
        loading: false
      })
    }).catch(error => {

      this.props.navigate('/error', {
        state: {
          status: 404,
          from: 'article'
        }
      })
    }
    )
  }
}

Article.propTypes = {
  article_id: PropTypes.string,
  user: PropTypes.object,
}

export default Article;