const express = require("express");
const cors = require("cors");
const port = 3091;

const server = express();
server.use(express.json());
server.use(cors());

// Rick and Morty API
// baseURL -> https://rickandmortyapi.com/api/
// GET all characters
// https://rickandmortyapi.com/api/character/ pass an id to return a single character
// GET the list of locations
// https://rickandmortyapi.com/api/location/ pass an id to return a single location
// GET all episodes
// https://rickandmortyapi.com/api/episode/ pass id paramter to get a single episode

server.get("/", (req, res) => {
  res.json(null);
});

server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Server is listening on port ${port}`);
});
