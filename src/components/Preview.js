import React from "react";
import { Link } from "react-router-dom";

class Preview extends React.Component {
  render() {

    const {name, image, desc, adopted} = this.props.details;

    console.log("begining",this.props);
    return (
      <li>
	<ul className="previewContainer">
	  <li><h4>{name}</h4> </li>
	  <li>
	    <Link to={`/animal/${this.props.index}`}
		  state={this.props}>
	      <img src={image} alt={name} />
	    </Link>
	    {/*	    <img src={image} alt={name} />*/}
	  </li>
	  <li>{desc}</li>
	  <li>{adopted ? "With a loving family" : "Waiting for their family"}</li>
	</ul>
      </li>
    );
  };
};

export default Preview;
