const path = require("path");
const fs = require("fs");
const request = require("request-promise");

let ChirpPath = path.join(__dirname, "../chirps.json");

fs.readFile(
  ChirpPath,
  {
    encoding: "UTF-8",
  },
  (err, chirps) => {
    let chirp = JSON.parse(chirps);

    console.log(chirps);
  }
);
