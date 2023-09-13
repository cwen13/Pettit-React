import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import samplePets from "./samplePets";

import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import AnimalProfile from "./components/AnimalProfile";

class App extends React.Component {

  state = {
    pets: {}
  };

  loadSamplePets = () => {
    this.setState({pets: samplePets});
  }

  render() {
    return (
      <Router>
	<Routes>
	  <Route 
	    path="/"
	    element={<Landing pets={samplePets} />}
	  />	
	  <Route path="/animal/:animalId"
		 element={<AnimalProfile />}
		 />
	  <Route path="/*"
		 element={<NotFound />}
		 />
	</Routes>
      </Router>
    );
  };
};

export default App;
