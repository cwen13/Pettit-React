import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import "./css/style.css";

import samplePets from "./samplePets";

import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import AnimalProfile from "./components/AnimalProfile";
import Navbar from "./components/Navbar";

// pet finder stufff
import { Client } from "@petfinder/petfinder-js";
const client = new Client({apiKey: process.env.REACT_APP_API_KEY,
			   secret: process.env.REACT_APP_API_SECRET_KEY});
var App = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let getKeys = (object) => {
    return {api_id: object.id,
	    url: object.url,
	    species:object.species,
	    age: object.age,
	    gender: object.gender,
	    size: object.size,
	    name: object.name,
	    description: object.description,
	    status: object.status,
	    picture: object.photos[0].medium };
  }
  
  var state = {
    pets: {}
  };
  
  useEffect(() => {
    console.log(getAnimals());
  }, []);

  let getAnimals = async() => {
    let res = await client.animal.search();
    console.log(res);
    let animals = res["data"]["animals"].filter((entry) => entry["photos"].length > 0);
    animals = animals.map((animal) => getKeys(animal));
    return animals;
  };    
  
  console.log(process.env);
  return (
    <>
      <Router>
	<Navbar />
	<Routes>
	  <Route 
	    index
	    path="/"
	    element={<Landing pets={samplePets}
			      loadAnimals={useEffect}/>}
	  />	
	  <Route path="/animal/:animalId"
		 loader={({ params }) => {
		   console.log("Paramss: " + params);
		 }}
		 element={<AnimalProfile />}
	  />
	  <Route path="/*"
		 element={<NotFound />}
	  />
	</Routes>
      </Router>
    </>
  );
};

export default App;
