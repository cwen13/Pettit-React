import { petfinder } from "@petfinder/petfinder-js";
const client = new petfinder.Client({apiKey: process.env.REACT_APP_API_KEY,
				     secret: process.env.REACT_APP_API_SECRET_KEY});

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

// get the data for the api to present the user with
let populate = async (page = 1) => {
  let res = await client.animal.search({page});
  let animals = res["data"]["animals"].filter((entry) => entry["photos"].length > 0);
  animals = animals.map((animal) => getKeys(animal));
  return animals;
}

module.exports = {
  getKeys,
  populate
}
