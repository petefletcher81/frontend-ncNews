import React from 'react';
import { Link } from "@reach/router";
import './Home.css';
import articleImage from './utils/assets/images/articleImage.png';

const Home = (prop) => {
  console.log(prop)
  return (
    <div>
      <h1>This is Home</h1>
      <div className="thumbnail text-center">
        <img src={articleImage} className="img-fluid" alt="Responsive image" />
        <div className="caption">
          <h2>Articles</h2>
        </div>
      </div>


      <button type="button" class="btn btn-primary"><Link to='articles'>Articles</Link></button>
      <button type="button" class="btn btn-primary"><Link to="topics">Topics</Link></button>

    </div>
  );
}

export default Home;