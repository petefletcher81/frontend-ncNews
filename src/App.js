import React, { Component } from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';
import Home from './components/Home';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Auth from './components/Auth';
import * as api from './components/utils/api';
import codeBanner from './components/utils/assets/images/codeBanner.png'
import Errors from './components/Error';
import URLerror from './components/URLerror';



class App extends Component {
  state = {
    _id: "",
    username: "",
    error: false
  }
  render() {


    return (
      <div className="App">
        <header>

          <img className="codeBanner" src={codeBanner} alt="sourceCode" />
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <Link className="flex-sm-fill text-sm-center nav-link" to='/'>Home</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to='articles'>Articles</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to='topics'>Topics</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to='logout' onClick={this.logout}>Logout</Link>

        </nav>

        <Auth user={this.state.username} error={this.state.error} login={this.login}>



          <Router className="articlesHome">
            <Home path='/' user={this.state.username} />
            <Articles path='articles/*' user={this.state} />
            <Topics className="topicsHome" path='topics/*' user={this.state} />
            <Errors path='/error' error={this.state.error} />
            <URLerror path='*' error={this.state.error} />
          </Router>
        </Auth>

        <footer>Pete Fletcher 2018</footer>
      </div>
    );
  }

  login = (username) => {

    api.userLogin(username).then(user => {

      this.setState({
        username: user,
        userID: user[0]._id,
        error: null
      })
    }).catch(err => {
      this.setState({
        error: true
      })
    })
    navigate('/')
  }


  logout = () => {
    this.setState({
      username: null
    })
  }
}

export default App;
