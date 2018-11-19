import React from 'react';
import { Link } from "@reach/router";
import './Home.css';
import homeHeader from './utils/assets/images/homeHeader.png';
import Aux from '../components/Aux'



const Home = (prop) => {

  return (
    <Aux>
      <img className="homeHead" src={homeHeader} alt="hometext" />

      <Aux>
        <div className='imageLinksHome'>
          <div className="containerHome">
            <Link to="articles">
              {" "}
              <img
                className=""
                src="https://images.pexels.com/photos/920115/pexels-photo-920115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="articlesLink"
              />
            </Link>

            <div className="image-caption">
              <h5>Articles</h5>
              <p>Hot from the net</p>
            </div>
          </div>

          <div className="containerHome">
            <Link to="topics">
              {" "}
              <img
                className=""
                src="https://images.pexels.com/photos/545331/pexels-photo-545331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="topicLink"
              />
            </Link>

            <div className="image-caption">
              <h5>Topic</h5>
              <p>select from your favourite slug</p>
            </div>
          </div>
        </div>


      </Aux>


      <div className="row">

        <div className="column">
          <button type="button" className="btn article-button"><Link to="articles">Articles</Link></button>
        </div>

        <div className="column">
          <button id="topics" type="button" className="btn topic-button"><Link to="topics">Topics</Link></button>
        </div>

      </div>


    </Aux>

  );
}

export default Home;