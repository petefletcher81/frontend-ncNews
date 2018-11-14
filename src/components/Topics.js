import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import * as api from './utils/api';
import TopicsHome from './TopicsHome';
import Topic from './Topic'

class Topics extends Component {
  state = {
    topics: []
  }
  render() {
    console.log(this.props.user)
    return (
      <div>
        <nav>
          <Link to="./">Topics</Link>
        </nav>

        <Router>
          <TopicsHome path='/' topics={this.state.topics} />
          <Topic path='/:topic_slug/articles' user={this.props.user} />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(alltopic => {
      this.setState({
        topics: alltopic,
        loading: false
      })
    });
  }
}

export default Topics;