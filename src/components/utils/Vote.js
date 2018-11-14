import React from 'react';
import * as api from './api'

class Votes extends React.Component {
  state = {
    voteChanged: 0
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => { this.vote('up') }} disabled={this.state.voteChanged === 1}>Give it a like</button>
        <p>Votes : {this.props.votes + this.state.voteChanged}</p>
        <button onClick={() => { this.vote('down') }} disabled={this.state.voteChanged === -1}>This is no good</button>
      </div >
    );
  }
  vote = (direction) => {
    const article_id = this.props.article_id
    const section = this.props.section

    api.votePatch(article_id, section, direction).then(res => {
      console.log(res)
      console.log('patch worked')
    })
    this.setState({
      voteChanged: direction === 'up' ? this.state.voteChanged + 1 : this.state.voteChanged - 1
    })
  }
}




export default Votes;