import React from 'react';
import * as api from './utils/api'

class AddArticle extends React.Component {
  state = {
    postTitle: '',
    postBody: '',
    belongs_to: '',
    created_by: ''
  }
  render() {

    return (
      <div>
        <h2>Add Article</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='postTitle'> Article Title: </label>
          <input onChange={this.handleChange} id='postTitle' type='text' />
          <br></br>
          <br></br>

          <label htmlFor='postBody' > Article</label>
          <p></p>
          <textarea onChange={this.handleChange} id='postBody' type='text'
          />
          <br></br>

          <label htmlFor='belongs_to' />
          <select onChange={this.handleChange} id="belongs_to" required>
            <option key="pick">Pick a Topic</option>
            <option key="coding">coding</option>
            <option key="football">football</option>
            <option key='cooking'>cooking</option>
          </select>

          <button onClick={this.handleSubmit}>Submit</button>

        </form>
      </div>
    );
  }
  componentDidMount = () => {
    this.setState({
      created_by: this.props.user.userID
    })
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state)
    api.postArticle(this.state).then(newArticle => {
      this.props.addArticle(newArticle)
    })
    this.setState({
      newComment: ''
    })

  }
}

export default AddArticle;