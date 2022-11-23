const path = require("path");
const fs = require("fs");
const request = require("request");
const dataPath = path.join(__dirname, "../popular-downloads.json");

request("https://reddit.com/r/ProgrammerHumor.json", (err, res, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach((item) => {
    let MediaType = path.extname(item.data.url);
    if (err) {
      console.log(err);
    } else if (MediaType === ".jpg" || MediaType === ".gif" || MediaType === ".png") {
      request(item.data.url).pipe(fs.createWriteStream(`./downloads/${item.data.author}${MediaType}`));
    }
  });
});
