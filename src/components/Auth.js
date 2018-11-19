import React from 'react';
import './Auth.css';
import loginMain from './utils/assets/images/loginPage.png'
import PropTypes from 'prop-types';



class Auth extends React.Component {
  state = {
    username: 'jessjelly',
    userID: ''
  }

  render() {
    const { children, user, error } = this.props
    console.log(user)
    return (

      user ? children :
        <form onSubmit={this.handleSubmit} className="authForm-container">
          <img className="bgimg" src={loginMain} alt="news desk" />
          <div className="form-group">
            <label className="form-text" htmlFor='username'>USERNAME </label>
            <input className="form-control" onChange={this.handleChange} id='username' type='text' value={this.state.username} placeholder="jessjelly" />
            <button className="form-control" onClick={this.handleChange} >LOGIN</button>
            {error && <h4>invalid user</h4>}
          </div>
        </form>


    );
  }
  handleChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()
    this.props.login(this.state.username)
  }


}
Auth.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.array,
  error: PropTypes.bool,
}

export default Auth;