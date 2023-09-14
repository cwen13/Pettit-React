import React from "react";

import Preview from "./Preview";

class Landing extends React.Component {
  render() {
    return (
      <>
	<p> This is where ther will be anaimals</p>
	<ul className="petList"> 
	{Object.keys(this.props.pets).map(key => (
	  <Preview key={key}
		   index={key}
		   details={this.props.pets[key]}

	  />
	))}
	</ul>
	<button> Click to populate animals</button>
      </>
    );
  };
};

export default Landing;
