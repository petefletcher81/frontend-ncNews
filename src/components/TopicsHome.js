import React from 'react';
import './TopicsHome.css';
import { Link } from '@reach/router'

const TopicsHome = (props) => {
  console.log(props, 'this is topicshome')
  return (
    <div>
      <h1>All Topics</h1>
      {props.topics.map(topic => {
        console.log(topic, 'this is topic')
        return <>
          <div className="topicsFlex" key={topic.slug}>
            <Link to={`${topic.title}/articles`}>{topic.title}</Link>
          </div>
        </>
      })}
    </div>
  );
}

export default TopicsHome;