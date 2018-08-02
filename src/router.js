const {
  handlerHomeRoute,
  handlerPublic,
  handlerSearch,
  handlerLastSearch,
} = require('./handler.js');

require('dotenv').config();

const router = (req, res) => {
  const URL = req.url;
  // indexOf === 0 because of URL´s starting point with each string
  if (URL === '/') {
    handlerHomeRoute(res);
  } else if (URL.indexOf('/public/') === 0) {
    console.log('running public');
    handlerPublic(req, res);
  } else if (URL.indexOf('/search/') === 0) {
    console.log('running search');
    handlerSearch(req, res);


    // let searchTerm = URL.split('/search/')[1];
    // const guardianAPIURL = `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${guardianAPI}`;
    // console.log(guardianAPIURL);
    // npmRequest(guardianAPIURL, (error, response, body) => {
    //   console.log("error: ", error);
    //   console.log("statuscode: ", response && response.statusCode);

    //   const newsResults = JSON.stringify(logic.createNewsObj(body));
    //   console.log(newsResults);
    //   res.writeHead(response.statusCode, { 'content-type': 'text/html' });
    //   res.end(newsResults);
    // });
  } else if (URL.indexOf('/lastsearch/') === 0) {
    console.log('running lastfm search');
    handlerLastSearch(req, res);
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('unknown url');
  }
};

module.exports = router;
