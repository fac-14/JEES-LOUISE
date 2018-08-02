const fs = require('fs');

const path = require('path');

require('dotenv').config();

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

module.exports = {
  handlerHomeRoute,
  handlerPublic,
};

// const handleSearch = ()