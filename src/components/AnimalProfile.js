import React from "react";
import { useLocation, useParams } from "react-router-dom";

let AnimalProfile = () => {
  let location = useLocation();
  let params = useParams();
//  console.log("loc: " + Object.keys(location.state.details));
//  console.log("Params: " + params.animalId);
  return (
    <>
      
      <p>here is an animal profile</p>
    </>
  );
};

export default AnimalProfile;
