import React from 'react';
import * as api from './utils/api';
import PropTypes from 'prop-types';

class AddArticle extends React.Component {
  state = {
    postTitle: '',
    postBody: '',
    belongs_to: '',
    created_by: '',
    error: '',

  }

  render() {

    const { error } = this.props

    return (
      <div>
        <h2>Add Article</h2>
        {error && <h3>{error}</h3>}
        <form className="addArticleForm" onSubmit={this.handleSubmit}>
          <label htmlFor='postTitle'> Article Title: </label>
          <input className="articleTitle" onChange={this.handleChange} id='postTitle' type='text' />
          <br></br>
          <br></br>

          <label htmlFor='postBody' > Article Body</label>
          <p></p>
          <textarea className="articleBodySubmit" onChange={this.handleChange} id='postBody' type='text'
          />
          <br></br>

          <label htmlFor='belongs_to' />
          <select className='selectForm' onChange={this.handleChange} id="belongs_to" required>
            <option key="pick">Pick a Topic</option>
            <option key="coding">coding</option>
            <option key="football">football</option>
            <option key='cooking'>cooking</option>
          </select>
          <p></p>
          <button className="articleSubmit" onClick={this.handleSubmit}>Submit</button>
          <p></p>

        </form>
      </div>
    );
  }
  componentDidMount = () => {
    const { user } = this.props
    this.setState({
      created_by: user.userID
    })
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = event => {
    const { postBody } = this.state
    event.preventDefault();
    //console.log(this.state)
    api.postArticle(this.state).then(newArticle => {
      this.props.addArticle(newArticle)
    })
    if (postBody) {
      this.setState({
        postBody: '',
        error: ''
      })
    }
    else {
      this.setState({
        error: 'Please tpye into the article body'
      })
    }
  }
}

AddArticle.propTypes = {
  error: PropTypes.bool
};

export default AddArticle;