import React from 'react';
import './TopicsHome.css';
import { Link } from '@reach/router'
import topicsHeader from './utils/assets/images/allTopicsHeading.png';
import Aux from './Aux';

const TopicsHome = (props) => {
  // console.log(props, 'this is topicshome')
  return (
    <Aux>
      <div>
        <img className='topicsHeader' src={topicsHeader} alt="topicsHeader" />
        <div className="topicContainer">
          {props.topics.map(topic => {
            // console.log(topic, 'this is topic')
            return <>
              <div className="topicsFlex" key={topic.slug}>
                <Link to={`${topic.title}/articles`}>{topic.title}</Link>
              </div>
            </>
          })}
        </div>
        <div className="carousel">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6">
            {/* >>>>>>>>>> inside the carousel <<<<<<<<<<<<<<< */}
            <Aux>
              <div id="mainCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="coding" />

                    
                  
                      <div class="carousel-caption d-none d-md-block" >
                        <h5>Noding and Coding</h5>
                        <p>For all your coding needs</p>
                  
                    </div>
                   


                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/149356/pexels-photo-149356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="football" />

                  
                      <div class="carousel-caption d-none d-md-block" >
                        <h5>Football</h5>
                        <p>Its more than just a ball</p>
                    
                    </div>
                    

                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/1345190/pexels-photo-1345190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cooking" />

                    
                  
                      <div class="carousel-caption d-none d-md-block" >
                        <h5>Cooking</h5>
                        <p>Serving the delicious</p>
                  
                    </div>
                  
                  </div>
                </div>

              </div>
              <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </Aux>
          </div>
        </div>

      </div>
      <div className="col"></div>

    </Aux>
  );
}

export default TopicsHome;