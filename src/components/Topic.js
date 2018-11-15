import React from 'react';
import * as api from './utils/api';
import './Topic.css';
import AddArticle from './AddArticle'

class Topic extends React.Component {
  state = {
    singleTopic: [],
    loading: true,
    addArticle: false
  }
  render() {
    // console.log(this.props.topic_slug, 'this is topic')
    if (this.state.loading) return <div><h2>Loading...</h2></div>
    return (
      <div className="mainBody">
        <button className="addArticleBtn" onClick={this.toggleArticle}>Add Article</button>
        {(this.state.addArticle ?
          <AddArticle addArticle={this.addArticle} topic_slug={this.props.topic_slug}
            user={this.props.user} /> : null)}

        <h1>{this.props.topic_slug}</h1>

        {this.state.singleTopic.map(articles => {
          return <div key={articles._id} className="TopicMainBody" >{articles.title}
            <div className="userName">
              <p>{articles.created_by.username}</p>
              <img src={articles.created_by.avatar_url} alt="userAvatar" /></div></div>

        })
        }}>
      </div >
    );
  }
  addArticle = (newArticle) => {
    this.setState({
      singleTopic: [newArticle, ...this.state.singleTopic]
    })
  }


  componentDidMount() {
    this.fetchTopic();
  }

  toggleArticle = () => {
    console.log('ive been clicked')
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
    });
  }
}

export default Topic;