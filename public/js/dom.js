/* eslint-disable */

var submitBtn = document.querySelector('#search-btn');
var input = document.querySelector('#search-input');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var inputValue = input.value;
  console.log('input ' + inputValue);
  requestData('/search/' + inputValue, populate);
  requestData('/lastsearch/' + inputValue, musicPopulate);
});




// unfinished function to populate DOM with guardian response data
function populate(data) {
  console.log('NEWS:', data);
  for (var i = 0; i <= 4; i++) {
    var title = document.createElement('h3');
    var date = document.createElement('p');
    var articleLink = document.createElement('a');
  }
}

function musicPopulate(data) {
  console.log('MUSIC', data);
  for (var i = 0; i <= 4; i++) {
    var title = document.createElement('h3');
    var date = document.createElement('p');
    var articleLink = document.createElement('a');
  }
}