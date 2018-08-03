// setup required Modules
const fs = require('fs');

const npmRequest = require('request');

const path = require('path');

const logic = require('./logic');

require('dotenv').config();

const guardianAPI = process.env.GUARDIANAPI;

const lastfmAPI = process.env.LASTFMAPI;

const buildPath = (myPath) => {
  return path.join(__dirname, '..', myPath);
};

// Start Handler functions that are being called in router.js

// Home Handler adding index.html to home dir
const handlerHomeRoute = (response) => {
  console.log('running handler home');
  fs.readFile(buildPath('public/index.html'),
    (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.end(file);
    }
  )
}

// Handling public requests coming from client to backend
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

// if user inputs text and clicks button eventlistener creates URL that gets passed into router.js which in turn calls handlerSearch and 
// handlerLastSearch functions that in turn use the npm Request module in order to create and end a response
// route.js takes handler search functions and sends it to frontend as stringified JSON object

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

const handlerLastSearch = (req, res) => {
  let searchTerm = req.url.split('/lastsearch/')[1];
  const lastfmAPIURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm}&api_key=${lastfmAPI}&format=json`;
  console.log(lastfmAPIURL);
  npmRequest(lastfmAPIURL, (error, response, body) => {
    console.log("error: ", error);
    console.log("statuscode: ", response && response.statusCode);

    const musicResults = JSON.stringify(logic.createMusicObj(body));
    console.log(musicResults);

    res.writeHead(response.statusCode, { 'content-type': 'application/json' });
    res.end(musicResults);
  });
};


module.exports = {
  handlerHomeRoute,
  handlerPublic,
  handlerSearch,
  handlerLastSearch,
};

// const handleSearch = ()