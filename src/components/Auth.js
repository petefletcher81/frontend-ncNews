import React from 'react';
import './Auth.css';
import loginMain from './utils/assets/images/loginPage.png'
// import { navigate } from '@reach/router';



class Auth extends React.Component {
  state = {
    username: 'jessjelly',
    userID: ''
  }

  render() {

    return (

      this.props.user ? this.props.children :
        <form onSubmit={this.handleSubmit} className="authForm-container">
          <img className="bgimg" src={loginMain} alt="news desk" />
          <div className="form-group">
            <label className="form-text" htmlFor='username'>USERNAME </label>
            <input className="form-control" onChange={this.handleChange} id='username' type='text' value={this.state.username} placeholder="jessjelly" />
            <button className="form-control" onClick={this.handleChange} >LOGIN</button>
            {this.props.error && <h4>invalid user</h4>}
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
    // (event)console.log
    event.preventDefault()
    this.props.login(this.state.username)
  }

}

export default Auth;