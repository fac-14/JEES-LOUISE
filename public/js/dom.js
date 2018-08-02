/* eslint-disable */

var submitBtn = document.querySelector('#search-btn');
var input = document.querySelector('#search-input');
var newsContainer = document.querySelector('#news-container');
var songContainer = document.querySelector('#song-container');
var sections = document.querySelector('section');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // add css to divs as you get results
  sections.classList.add('container-style');

  var inputValue = input.value;
  console.log('input ' + inputValue);
  requestData('/search/' + inputValue, populate);
  requestData('/lastsearch/' + inputValue, musicPopulate);
});


// populate DOM with guardian response data
function populate(data, ) {
  clearList();
  for (var i = 0; i <= 4; i++) {
    //split date to remove time
    var pubDate = data[i]['pubDate'].split('T');

    var articleDiv = document.createElement('div');

    var date = document.createElement('p');
    var articleLink = document.createElement('a');

    articleDiv.appendChild(articleLink);
    articleDiv.appendChild(date);

    var titleContent = document.createTextNode(data[i]['articleTitle']);
    var dateContent = document.createTextNode('Published: ' + pubDate[0]);
    articleLink.setAttribute('href', data[i]['articleUrl']);
    articleLink.setAttribute('target', '_target'); articleDiv.appendChild(date);

    articleLink.appendChild(titleContent);
    date.appendChild(dateContent);

    newsContainer.appendChild(articleDiv);

  }
}

function musicPopulate(data) {
  console.log('MUSIC', data);
}

function clearList() {
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
};