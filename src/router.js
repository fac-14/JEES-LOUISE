const npmRequest = require('request');
const {
  handlerHomeRoute,
  handlerPublic,
} = require('./handler.js');

require('dotenv').config();

const guardianAPI = process.env.GUARDIANAPI;

const guardianAPIURL = `https://content.guardianapis.com/search?q=brexit&api-key=${guardianAPI}`;

const router = (req, res) => {
  const URL = req.url;

  if (URL === '/') {
    handlerHomeRoute(res);
  } else if (URL.indexOf('/public/') === 0) {
    console.log('running public');
    handlerPublic(req, res);
  }
  // else if (URL === '/search') {
  //   npmRequest(guardianAPIURL, (error, response, body) => {
  //     console.log('error', error);
  //     console.log('statusCode:', response && response.statusCode);
  //     res.writeHead(response.statusCode, { 'content-type': 'text/html' });
  //     const data = body;
  //     res.end(data);
  // }
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('unknown url');
  }
};

module.exports = router;
