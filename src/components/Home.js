import React from 'react';
import { Link } from "@reach/router";
import './Home.css';



const Home = (prop) => {
  console.log(prop)
  return (
    <div className="home">

      <div className="row">

        <div className="column">
          <button type="button" className="btn article-button"><Link to="articles">Articles</Link></button>
        </div>

        <div className="column">
          <button id="topics" type="button" className="btn topic-button"><Link to="topics">Topics</Link></button>
        </div>

      </div>

    </div>

  );
}

export default Home;