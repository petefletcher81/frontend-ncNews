import React from 'react';
import './ArticlesHome.css';
import { Link } from '@reach/router';
import Votes from './utils/Vote.js';
import latestArticles from './utils/assets/images/latestArticlesHeading.png';
import moment from 'moment';
import PropTypes from 'prop-types';



class ArticlesHomes extends React.Component {
  state = {

  }
  render() {
    const { loading, articles } = this.props;

    if (loading) return <h1>loading</h1>
    return (
      <div className='latestArticlesContainer'>

        <img src={latestArticles} className="latestArticlesImg" alt='latestArticles' height="" width="45%" />

        {articles.map(article => {
          return (

            <div key={article.title} className="singleArticlerow" >
              <div className="articleBody"  >

                <div>
                  <h3>{article.title}</h3>
                  <p>{article.body}</p>
                  <p><strong>{moment(article.created_at).format("MMM Do YY")}</strong></p>
                  <button className="articlesBtn"><Link to={`${article._id}`}>Read More</Link></button>
                </div>

                <div><Votes article_id={article._id} votes={article.votes} section={'articles'} /></div>

              </div>
            </div>

          )
        })}
      </div>
    );
  }

}

ArticlesHomes.propTypes = {
  loading: PropTypes.string,
  articles: PropTypes.array,

}
export default ArticlesHomes;   