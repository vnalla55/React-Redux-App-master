import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {

  return (
    <nav>
      <h4>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        < Link to="/about" activeClassName="active">
          About
        </Link>
        {" | "}
        < Link to="/courses" activeClassName="active">
          Courses</Link>
      </h4>
    </nav>
  );
};

export default Header;
