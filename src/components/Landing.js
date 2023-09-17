import {useEffect} from "react";
import React from "react";

import { Client } from "@petfinder/petfinder-js";

import Preview from "./Preview";

//const client = new Client({apiKey: process.env.REACT_APP_API_KEY,
//				     secret: process.env.REACT_APP_API_SECRET_KEY});
//
//
var Landing = (props) => {
  
  return (
    <>
      <p>Current listing of pets</p>
      <ul className="petList"> 
	{Object.keys(props.pets).map(key => (
	  <Preview key={key}
		   index={key}
		   details={props.pets[key]}
		   
	  />
	))}
      </ul>
      <button onClick={useEffect}> Click to populate animals</button>
    </>
  );
};

export default Landing;
