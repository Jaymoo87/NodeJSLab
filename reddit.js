const path = require("path");
const fs = require("fs");
const request = require("request-promise");

let dataPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/ProgrammerHumor.json", (err, res, body) => {
  if (err) console.log(err);

  // JSON.parse(body).data.children.forEach((item) => {
  //   fs.appendFileSync(dataPath, item.data.title + "\n");
  //   fs.appendFileSync(dataPath, item.data.author + "\n");
  //   fs.appendFileSync(dataPath, item.data.url + "\n");
  // });
  let articleData = [];
  JSON.parse(body).data.children.forEach((item) => {
    articleData.push({
      title: item.data.title,
      author: item.data.author,
      url: item.data.url,
    });
  });
  fs.writeFileSync(dataPath, JSON.stringify(articleData));
});

// dataPath, stringify(item.data.title) + "\n"
