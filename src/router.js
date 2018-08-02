const npmRequest = require('request');
const {
  handlerHomeRoute,
  handlerPublic,
} = require('./handler.js');

require('dotenv').config();
const guardianAPI = process.env.GUARDIANAPI;

const router = (req, res) => {
  const URL = req.url;
  // indexOf === 0 because of URL´s starting point with each string
  if (URL === '/') {
    handlerHomeRoute(res);
  } else if (URL.indexOf('/public/') === 0) {
    console.log('running public');
    handlerPublic(req, res);
  } else if (URL.indexOf('/search/') === 0) {
    console.log(URL);
    let searchTerm = URL.split('/search/')[1];
    console.log(searchTerm);
    const guardianAPIURL = `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${guardianAPI}`;
    console.log(guardianAPIURL);
    npmRequest(guardianAPIURL, (error, response, body) => {
      console.log("error: ", error);
      console.log("statuscode: ", response && response.statusCode);
      res.writeHead(response.statusCode, { 'content-type': 'text/html' });
      const data = body;
      res.end(data);
    });
  }

  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('unknown url');
  }
};

module.exports = router;
