// const json = require('./guardian-brexit-search-dummy.json');
const router = require('./router');


// const jsonResults = json.response.results;

const logic = {
  jsonArr: array => array instanceof Array,
  createNewsObj: (data) => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
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
};

module.exports = logic;
