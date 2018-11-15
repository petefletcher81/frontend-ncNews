import React from 'react';
import './ArticlesHome.css';
import { Link } from '@reach/router';
import Votes from './utils/Vote';



class ArticlesHomes extends React.Component {
  state = {

  }
  render() {

    if (this.props.loading) return <h1>loading</h1>
    return (
      <div >
        <h1>Latest Articles</h1>
        {this.props.articles.map(article => {
          return (
            <div className="row article-row">
              <div className="articleBody" key={article.title} ><h3>{article.title}</h3>
                <p>{article.body}</p>
                <Votes article_id={article.article_id} votes={article.votes} section={'articles'} />
                <button className="articlesBtn"><Link to={`${article._id}`}>Read More</Link></button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }



  // linkToArticle = (articleID) => {
  //className = "articleBody" onClick = {() => this.linkToArticle(article._id)}
  //   <navigate(`articles/${articleID}`) />
  // }
}

export default ArticlesHomes;   