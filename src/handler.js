const fs = require('fs');

const npmRequest = require('request');

const path = require('path');

const logic = require('./logic');

require('dotenv').config();
const guardianAPI = process.env.GUARDIANAPI;

const buildPath = (myPath) => {
  return path.join(__dirname, '..', myPath);
};

// function returnError(error) {
//   response.writeHead(500, 'Content-type: text/html');
//   response.end('<h1>Error on our end!!!</h1>');
// }


const handlerHomeRoute = (response) => {
  console.log('running handler home');
  fs.readFile(buildPath('public/index.html'),
    (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      response.writeHead(200, 'Content-type: text/html');
      response.end(file);
    }
  )
}

const handlerPublic = (request, response) => {
  console.log('running handler public');
  const extension = request.url.split('.')[1];

  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpg: "image/jpg",
    png: "image/png",
    json: "application/json"
  };

  fs.readFile(buildPath(request.url), (error, file) => {
    if (error) {
      console.log(error);
      return;
    }
    response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
    response.end(file);
  });
};

const handlerSearch = (req, res) => {
  let searchTerm = req.url.split('/search/')[1];
  const guardianAPIURL = `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${guardianAPI}`;
  console.log(guardianAPIURL);
  npmRequest(guardianAPIURL, (error, response, body) => {
    console.log("error: ", error);
    console.log("statuscode: ", response && response.statusCode);

    const newsResults = JSON.stringify(logic.createNewsObj(body));
    console.log(newsResults);
    res.writeHead(response.statusCode, { 'content-type': 'application/json' });
    res.end(newsResults);
  });
};

module.exports = {
  handlerHomeRoute,
  handlerPublic,
  handlerSearch,
};

// const handleSearch = ()