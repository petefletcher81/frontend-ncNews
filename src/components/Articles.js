import Article from '../components/Article';
import ArticlesHome from '../components/ArticlesHome';
import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import * as api from './utils/api';
import './Articles.css'



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
      console.log(articles)
      this.setState({
        newArticles: articles,
        loading: false
      })
    });
  }
}

export default Articles;