Bad url 
    
    
























404 errors

app.js
state {
  error: null
}

<Auth error={this.state.error} />


login with wrong 

login

setState({
  user
  error: null
})

then.().catch(err => {
  this.setState({
    error
  })
})



auth.js

conditional rendering
input className = { error? 'failed' : null}

{ error && <p>invalid user</p> }

need errors for inputs


import navigate from '@reach/router'
< Error path="error" > --> send all errors to navigate here
this.props.navigate('/error', {
    state: {
    status: 404,
from: '/articles'
}
})

const error = (props) => {
    console.log(error)
  return (
    <p>{props.location.state.msg}</p>
  }{props.location.state.msg === 404 ? page not found : <p>it broken</p>500}
  );
}
 
export default error;

