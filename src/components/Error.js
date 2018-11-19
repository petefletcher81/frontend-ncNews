import React from 'react';
import { Link } from '@reach/router'
const Error = (props) => {
  const { state } = props.location
  return (
    <div>
      <p>{state.msg}</p>
      <p>{state.status === 404 ? 'Sorry Page Not Found' : 'We have a server problem'}</p>
      <Link to='/'><button>Home</button></Link>
    </div>
  );
}

export default Error;