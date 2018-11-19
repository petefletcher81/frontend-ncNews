import React from 'react';
import * as api from './api'
import './Vote.css';

class VoteComment extends React.Component {
  state = {
    voteChanged: 0
  }
  render() {

    return (
      <div className="container-btns-comment">
        <button className="voteBtn" onClick={() => { this.vote('up') }} disabled={this.state.voteChanged === 1}>LIKE</button>
        <button className="voteBtn" onClick={() => { this.vote('down') }} disabled={this.state.voteChanged === -1}>DISLIKE</button>
        <p><strong>VOTES {this.props.votes + this.state.voteChanged}</strong></p>
      </div >
    );
  }
  vote = (direction) => {
    const comment_id = this.props.comment_id
    const section = this.props.section

    // console.log(this.props.comment_id)

    api.votePatchComment(comment_id, section, direction).then(res => {
      // console.log(res)
      console.log('patch worked')
    })
    this.setState({
      voteChanged: direction === 'up' ? this.state.voteChanged + 1 : this.state.voteChanged - 1
    })
  }
}

export default VoteComment;