import React from "react";
import { useLocation, useParams } from "react-router-dom";

let AnimalProfile = () => {
  let location = useLocation().state;
  let params = useParams();
  console.log("loc: " + Object.keys(location.details));
  console.log("Params: " + params.animalId);
  console.log("EVN: " + Object.keys(process.env));
  return (
    <section className="animalProfile">
      <h1>{location.details.name}</h1>
      <img src={location.details.image} alt={location.details.name} />
      <label>{location.details.adopted ? "With a loving family":"Looking to find a home"}</label>
      <p>Desc: {location.details.desc}</p>
    </section>
  );
};

export default AnimalProfile;
