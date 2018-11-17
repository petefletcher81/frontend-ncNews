import React from 'react';
import * as api from './api'
import './Vote.css';

class Votes extends React.Component {
  state = {
    voteChanged: 0
  }
  render() {

    return (
      <div className="container-btns">
        <button className="voteBtn" onClick={() => { this.vote('up') }} disabled={this.state.voteChanged === 1}>LIKE</button>
        <p><strong>VOTES {this.props.votes + this.state.voteChanged}</strong></p>
        <button className="voteBtn" onClick={() => { this.vote('down') }} disabled={this.state.voteChanged === -1}>DISLIKE</button>
      </div >
    );
  }
  vote = (direction) => {
    const article_id = this.props.article_id
    const section = this.props.section

    api.votePatch(article_id, section, direction).then(res => {

      console.log('patch worked')
    })
    this.setState({
      voteChanged: direction === 'up' ? this.state.voteChanged + 1 : this.state.voteChanged - 1
    })
  }
}




export default Votes;