import React from 'react';
import {Link} from '@reach/router'
const Error = (props) => {
  console.log(props.location)
  return (
    <div>
    <p>{props.location.state.msg}</p>
    <p>{props.location.state.status === 404 ? 'Sorry Page Not Found' : 'We have a server problem'}</p>
    <Link to='/'><button>Home</button></Link> 
    </div>
    );
}

export default Error;