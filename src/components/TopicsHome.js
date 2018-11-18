import React from "react";
import "./TopicsHome.css";
import { Link } from "@reach/router";
import topicsHeader from "./utils/assets/images/allTopicsHeading.png";
import Aux from "./Aux";

const TopicsHome = props => {
  // console.log(props, 'this is topicshome')
  return (
    <Aux>
      <img className="topicsHeader" src={topicsHeader} alt="topicsHeader" />

      {/* >>>>>>>>>> inside the carousel <<<<<<<<<<<<<<< */}
      <Aux>
        <div className='imageLinks'>

        <div className="container">
        <Link to="coding/articles">
          {" "}
          <img
            class=""
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="coding"
          />
        </Link>

        <div class="image-caption">
          <h5>Noding and Coding</h5>
          <p>For all your coding needs</p>
        </div>
        </div>

        <div class="container">
          <Link to="football/articles">
            {" "}
            <img
              class=""
              src="https://images.pexels.com/photos/149356/pexels-photo-149356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="football"
            />
          </Link>

          <div class="image-caption">
            <h5>Football</h5>
            <p>Its more than just a ball</p>
          </div>
        </div>
        <div class="container">
          <Link to="cooking/articles">
            <img
              class=""
              src="https://images.pexels.com/photos/1345190/pexels-photo-1345190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="cooking"
            />
          </Link>

          <div class="image-caption">
            <h5>Cooking</h5>
            <p>Serving the delicious</p>
          </div>
        </div>
        </div>
      </Aux>

      <div>
        <div className="topicContainer">
          {props.topics.map(topic => {
            // console.log(topic, 'this is topic')
            return (
              <>
                <button className="topicsFlex" key={topic.slug}>
                  <Link to={`${topic.title}/articles`}>{topic.title}</Link>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </Aux>
  );
};

export default TopicsHome;
