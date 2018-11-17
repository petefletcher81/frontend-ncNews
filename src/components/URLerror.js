import React from 'react';
import {Link } from '@reach/router'

const URLerror = (props) => {
    return ( 
        <div>
        <p>Url Not Found</p>
    <Link to='/'><button>Home</button></Link> 
    </div>
     );
}
 
export default URLerror;