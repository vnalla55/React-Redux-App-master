import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{

render(){
  return(
    <div className = "jumbotron">
<    h1>HomePage</h1>
     <p>React-Redux Router in ES6 </p>
     <Link to = "about" className = "btn btn-primary btn-sm">AboutPage</Link>
    </div>
  )
}
}
export default HomePage;
