var petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: process.env.REACT_APP_API_KEY,
				     secret: process.env.REACT_APP_API_SECRET});
