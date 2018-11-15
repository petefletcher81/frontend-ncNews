import React from 'react';
import './TopicsHome.css';
import { Link } from '@reach/router'
import topicsHeader from './utils/assets/images/allTopicsHeading.png'

const TopicsHome = (props) => {
  // console.log(props, 'this is topicshome')
  return (
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
    </div>
  );
}

export default TopicsHome;