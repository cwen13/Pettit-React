import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import "./css/style.css";

import samplePets from "./samplePets";

import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import AnimalProfile from "./components/AnimalProfile";
import Navbar from "./components/Navbar";

class App extends React.Component {

  state = {
    pets: {}
  };

  loadSamplePets = () => {
    this.setState({pets: samplePets});
  }

  render() {
    console.log(process.env);
    return (
      <>
	<Router>
	    <Navbar />
	  <Routes>
	    <Route 
	      index
	      path="/"
	      element={<Landing pets={samplePets} />}
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
};

export default App;
