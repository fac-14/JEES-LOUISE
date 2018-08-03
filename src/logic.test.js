const test = require('tape');
const logic = require('./logic');
const json = require('./guardian-brexit-search-dummy.json');

const responseArr = json.response.results;

test('Testing tape is working', (t) => {
  t.equal(1, 1, 'One should equal one');
  t.end();
});
// tests for response object
test('Test if input is an object', (t) => {
  t.equal(typeof json, 'object', 'should return an object');
  t.equal(json instanceof Array, false, 'should return false for (instanceof Array)');
  t.end();
});
// tests for news array
test('Test if jsonResult is an array', (t) => {
  t.equal(logic.jsonArr(responseArr), true, 'should return true for news array');
  t.end();
});

// test('Test if we get an array with length of 5', (t) => {
//   t.deepEqual((logic.createNewsObj(uglyJson)).length, 5, 'should return 5');
//   t.end();
// });


// test('Check each news object contains a articleTitle, pubdate and articleUrl', (t) => {
//   t.deepEqual(Object.getOwnPropertyNames(logic.createNewsObj(uglyJson)[0]), ['articleTitle', 'pubDate', 'articleUrl'], 'object[0] in array should contain correct properties');
//   t.deepEqual(Object.getOwnPropertyNames(logic.createNewsObj(uglyJson)[3]), ['articleTitle', 'pubDate', 'articleUrl'], 'object[3] in array should contain correct properties');
//   t.end();
// });
