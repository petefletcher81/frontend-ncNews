import Article from '../components/Article';
import ArticlesHome from '../components/ArticlesHome';
import React, { Component } from 'react';
import { Link, Router, navigate } from '@reach/router';
import * as api from './utils/api';
import './Articles.css';




class Articles extends Component {
  state = {
    newArticles: [],
    loading: true
  }
  render() {

    return (
      <div>
        <nav className="navLink">
          <Link to='./'>ArticlesHome</Link>
        </nav>

        <Router >
          <ArticlesHome path='/' articles={this.state.newArticles} />
          <Article path=':article_id' user={this.props.user} />
        </Router>
      </div>

    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({
        newArticles: articles,
        loading: false
      })
    }).catch(error => {
      console.log(this.props)
      this.props.navigate('/error', {
        state: {
          status: 404,
          from: 'articles'
        }
      })
    }
    )
  }
}

export default Articles;