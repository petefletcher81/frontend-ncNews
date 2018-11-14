import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Auth from './components/Auth';
import * as api from './components/utils/api';
import codeBanner from './components/utils/assets/images/codeBanner.png'


class App extends Component {
  state = {
    _id: "5bdb35ad0f62a068584ce8fe",
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url: "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
    __v: 0
  }
  render() {
    return (
      <div className="App">
        <header>
          {/* <img className="northcoderimg" src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt="northcoders title" /> */}
          <img className="codeBanner" src={codeBanner} alt="sourceCode" />
        </header>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='articles'>Articles</Link>
          <Link to='topics'>Topics</Link>
          <Link to='logout' onClick={this.logout}>Logout</Link>

        </nav>
        <Auth user={this.state.username} login={this.login}>
          <Router>
            <Home path='/' user={this.state.username} />
            <Articles path='articles/*' user={this.state} />
            <Topics path='topics/*' user={this.state} />
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
        userID: user[0]._id
      })
    })
  }
  logout = () => {
    this.setState({
      username: null
    })
  }
}

export default App;
