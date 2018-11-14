import React from 'react';
import './Auth.css';

class Auth extends React.Component {
  state = {
    username: '',
    userID: ''
  }

  render() {

    return (

      this.props.user ? this.props.children :
        <form onSubmit={this.handleSubmit} className="authForm-container">
          <div className="form-group">
            <label className="form-text" htmlFor='username'>USERNAME </label>
            <input className="form-control" onChange={this.handleChange} id='username' type='text' placeholder="jessjelly" />
            <button className="form-control" onClick={this.handleChange}>LOGIN</button>
          </div>
        </form>


    );
  }
  handleChange = (event) => {
    //console.log(event.target.value, 'this is the value')
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()
    this.props.login(this.state.username)
  }
}

export default Auth;