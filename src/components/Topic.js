import React from 'react';
import * as api from './utils/api';
import './Topic.css';
import AddArticle from './AddArticle';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

class Topic extends React.Component {
  state = {
    singleTopic: [],
    loading: true,
    addArticle: false
  }
  render() {
    const { loading, addArticle, singleTopic } = this.state
    const { topic_slug, user } = this.props
    console.log(topic_slug, user)

    if (loading) return <div><h2>Loading...</h2></div>
    return (
      <div className="mainBody">
        <button className="addArticleBtn" onClick={this.toggleArticle}>Add Article</button>
        {(addArticle ?
          <AddArticle addArticle={this.addNewArticle} topic_slug={topic_slug}
            user={user} /> : null)}

        <h1>{topic_slug}</h1>

        {singleTopic.map(articles => {
          return <div key={articles._id} className="TopicMainBody" ><strong>{articles.title}</strong>
            <div className="userName">
              <p></p>
              <p>{articles.body}</p>
              <p>Comment Count : {articles.comment_count}</p>
              <div>
                <p><strong>{articles.created_by.username}</strong></p>
                <img src={articles.created_by.avatar_url} alt="userAvatar" /></div></div>
            <p></p>
            <Link to={`/articles/${articles._id}`}><button>More info: </button></Link>
          </div>

        })
        }
      </div >
    );
  }
  addNewArticle = (newArticle) => {
    this.setState({
      singleTopic: [newArticle, ...this.state.singleTopic]
    })
  }


  componentDidMount() {
    this.fetchTopic();
  }

  toggleArticle = () => {
    // console.log('ive been clicked')
    const doesShow = this.state.addArticle;
    this.setState({ addArticle: !doesShow })
  }

  fetchTopic = () => {
    const newtopic = this.props.topic_slug.toLowerCase();
    api.getTopic(newtopic).then(topic => {

      this.setState({
        singleTopic: topic,
        loading: false
      })
    }).catch(error => {
      console.log(this.props)
      this.props.navigate('/error', {
        state: {
          status: 404,
          from: 'topic'
        }
      })
    }
    )
  }
}

Topic.propTypes = {
  topic_slug: PropTypes.string,
  user: PropTypes.object,
}

export default Topic;