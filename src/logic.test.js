const test = require('tape');
const logic = require('./logic');
const json = require('./guardian-brexit-search-dummy.json');
const responseArr = json.response.results;
const filteredArray = [{
  webPublicationDate: '2018-07-09T16:57:33Z',
  webTitle: 'Brexit developments – or not | Letters ',
  webUrl:
    'https://www.theguardian.com/politics/2018/jul/09/brexit-developments-or-not',
},
{
  webTitle: 'Should Labour oppose Brexit? | Letters',
  webUrl:
    'https://www.theguardian.com/politics/2018/may/29/should-labour-oppose-brexit',
  apiUrl:
    'https://content.guardianapis.com/politics/2018/may/29/should-labour-oppose-brexit',
},
{
  webPublicationDate: '2018-07-30T05:31:56Z',
  webTitle: 'Monday briefing: thinktank in ‘Brexit-influencing game’',
  webUrl:
    'https://www.theguardian.com/world/2018/jul/30/monday-briefing-thinktank-in-brexit-influencing-game',
},
{
  webPublicationDate: '2018-07-27T08:43:14Z',
  webTitle: 'Where do the Brexit negotiations stand?',
  webUrl:
    'https://www.theguardian.com/politics/ng-interactive/2017/jul/20/where-are-we-up-to-in-these-brexit-talks',
},
{
  webPublicationDate: '2018-07-15T06:00:02Z',
  webTitle:
    'The week in radio and podcasts: Remainiacs; Brexitcast; Brexit Means…; Chopper’s Brexit Podcast; Ed Miliband',
  webUrl:
    'https://www.theguardian.com/tv-and-radio/2018/jul/15/radio-podcasts-politics-brexit-remainiacs-ed-miliband',
}];

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

test('Test if we get an array with length of 5', (t) => {
  t.equal(logic.getFive(responseArr), 5, 'should return 5');
  t.end();
});

// 
test('Check each news object contains a title, date and link', (t) => {
  t.equal()
})