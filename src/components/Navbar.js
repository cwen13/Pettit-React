import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
  render() {
    return (
      <nav>
	<ul>
	  <li><Link to="/">Pettit-React</Link></li>
	  <li>Login</li>
	  <li>logout</li>      
	</ul>
      </nav>
    );
  };
};

export default Navbar;
