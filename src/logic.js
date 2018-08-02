// const json = require('./guardian-brexit-search-dummy.json');
const router = require('./router');

const dummy = require('../lastfm-dummy.json');

// const jsonResults = json.response.results;

const logic = {
  jsonArr: array => array instanceof Array,
  // creates JSON object out of guardian API call response
  createNewsObj: (data) => {
    const parsedData = JSON.parse(data);
    const newsData = parsedData.response.results;
    const newsObj = [];
    newsData.forEach((value, index) => {
      const obj = {};
      if (index <= 4) {
        obj['articleTitle'] = value['webTitle'];
        obj['pubDate'] = value['webPublicationDate'];
        obj['articleUrl'] = value['webUrl'];
        newsObj.push(obj);
      }
    });
    return newsObj;
  },
  // creates JSON object out of lastFm API call response
  createMusicObj: (data) => {
    const parsedData = JSON.parse(data);
    const musicData = parsedData.results.trackmatches.track;
    const musicObj = [];
    musicData.forEach((value, index) => {
      const obj = {};
      if (index <= 4) {
        obj['artist'] = value['artist'];
        obj['title'] = value['name'];
        obj['songUrl'] = value['url'];
        musicObj.push(obj);
      }
    });
    return musicObj;
  },
};


module.exports = logic;
