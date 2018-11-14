import React from 'react';
import { Link } from "@reach/router";
import './Home.css';
import articleImage from './utils/assets/images/articleImage.png';


const Home = (prop) => {
  console.log(prop)
  return (
    <div>
        <img className="bgimgHome" src='https://images.pexels.com/photos/951240/pexels-photo-951240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='woodtexture' />
        <div className="thumbnail text-center">
        <img src={articleImage} className="img-fluid" alt="Responsivearticle" />
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