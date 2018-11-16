import React from 'react';
import './ArticlesHome.css';
import { Link } from '@reach/router';
import Votes from './utils/Vote';
import latestArticles from './utils/assets/images/latestArticlesHeading.png';
import moment from 'moment'


class ArticlesHomes extends React.Component {
  state = {

  }
  render() {

    if (this.props.loading) return <h1>loading</h1>
    return (
      <div >
        <img src={latestArticles} className="latestArticlesImg" alt='latestArticles' height="" width="80%" />
        {this.props.articles.map(article => {
          return (
            <div className="row article-row">
              <div className="articleBody" key={article.title} ><h3>{article.title}</h3>
                <p>{article.body}</p>
                {/* {console.log(article)} */}
                <Votes article_id={article._id} votes={article.votes} section={'articles'} />
                <button className="articlesBtn"><Link to={`${article._id}`}>Read More</Link></button>
                <p><strong>{moment(article.created_at).format("MMM Do YY")}</strong></p>
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