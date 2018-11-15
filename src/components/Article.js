import React from 'react';
import * as api from './utils/api';
import './Article.css';
import Comments from './Comments';
import Vote from './utils/Vote';


class Article extends React.Component {
  state = {
    singleArticle: {},
    loading: true,
    commentsToggle: false,
    addComment: false,
    reRender: false
  }
  render() {
    if (this.state.loading) return <div><h2>Loading...</h2></div>
    console.log(this.state.singleArticle.article.votes)

    return (
      <div className="mainBody">
        <div className="userBody">
          <h3>Created By : {this.state.singleArticle.article.created_by.username}</h3>
        </div>
        <p></p>
        <div className="articleMainBody">
          <h1>{this.state.singleArticle.article.title}</h1>
          <div>{this.state.singleArticle.article.body}</div>

          <p></p>

          <Vote article_id={this.props.article_id} votes={this.state.singleArticle.article.votes} section={'articles'} />
          <br></br>
        </div>
        <p></p>

        <button className="showCommentBtn" onClick={this.toggleComments}>Show comments</button>
        {(this.state.commentsToggle ? <Comments article_id={this.state.singleArticle.article._id} user={this.props.user} /> : null)}

      </div >
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
    api.getArticle(this.props.article_id).then(article => {
      this.setState({
        singleArticle: article,
        loading: false
      })
    });
  }
}

export default Article;