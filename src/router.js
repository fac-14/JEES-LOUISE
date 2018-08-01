const npmRequest = require('request');

const guardianAPI = require('./dummyapikey');

const guardianAPIURL = 'https://content.guardianapis.com/search?q=brexit&api-key=' + guardianAPI;

const router = (req, res) => {
  const URL = req.url;

  if (URL === '/') {
    npmRequest(guardianAPIURL, (error, response, body) => {
      console.log('error', error);
      console.log('statusCode:', response && response.statusCode);
      res.writeHead(response.statusCode, { 'content-type': 'text/html' });
      const data = body;
      res.end(data);
    });
  }
};

module.exports = router;
