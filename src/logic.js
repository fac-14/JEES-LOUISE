const json = require('./guardian-brexit-search-dummy.json');
const jsonResults = json.response.results;

const logic = {
  jsonArr: function (array) {
    return array instanceof Array;
  },
  getFive: function (array) {
    let newArr = array.slice(0, 5);
    console.log(newArr);
    return newArr.length;
  }

}

module.exports = logic;