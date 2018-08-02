/* eslint-disable */

var submitBtn = document.querySelector('#search-btn');
var input = document.querySelector('#search-input');
var newsContainer = document.querySelector('#news-container');
var songContainer = document.querySelector('#song-container');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var inputValue = input.value;
  console.log('input ' + inputValue);
  requestData('/search/' + inputValue, populate);
});

// unfinished function to populate DOM with guardian response data
function populate(data) {
  for (var i = 0; i <= 4; i++) {
    //split date to remove time
    var pubDate = data[i]['pubDate'].split('T');

    var articleDiv = document.createElement('div');
    
    var title = document.createElement('h3');
    var date = document.createElement('p');
    var articleLink = document.createElement('a');

    articleDiv.appendChild(articleLink);
    articleLink.appendChild(title);
    articleDiv.appendChild(date);

    var titleContent = document.createTextNode(data[i]['articleTitle']);
    var dateContent = document.createTextNode('Published: ' + pubDate[0]);
    articleLink.setAttribute('href', data[i]['articleUrl']);
    articleLink.setAttribute('target', '_target');

    title.appendChild(titleContent);
    date.appendChild(dateContent);
    
    newsContainer.appendChild(articleDiv);
    
  }
}