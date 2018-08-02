/* eslint-disable */

var submitBtn = document.querySelector('#search-btn');
var input = document.querySelector('#search-input');
var newsContainer = document.querySelector('#news-container');
var songContainer = document.querySelector('#song-container');


submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var inputValue = input.value;
  console.log('input ' + inputValue);
  if (inputValue.trim() == "") {
    alert("Please enter a search Term");
    return;
  }

  requestData('/search/' + inputValue, populate);
  requestData('/lastsearch/' + inputValue, musicPopulate);
});


// unfinished function to populate DOM with guardian response data
function populate(data, ) {
  clearList();

  // Create Header Element "News"
  var newsHeader = document.createElement('header');
  var categoryHeadline = document.createElement('h2');
  var headerContent = document.createTextNode('NEWS');
  categoryHeadline.appendChild(headerContent);
  newsHeader.appendChild(categoryHeadline);
  newsContainer.appendChild(newsHeader);


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

    articleDiv.appendChild(date);
    title.appendChild(titleContent);
    date.appendChild(dateContent);
    newsContainer.appendChild(articleDiv);

  }
}

function musicPopulate(data) {

  clearMusicList();

  // Create Header Element "MUSIC"
  var musicHeader = document.createElement('header');
  var categoryHeadline = document.createElement('h2');
  var headerContent = document.createTextNode('MUSIC');
  categoryHeadline.appendChild(headerContent);
  musicHeader.appendChild(categoryHeadline);
  songContainer.appendChild(musicHeader);


  for (var i = 0; i <= 4; i++) {
    var artist = data[i]['artist'];
    var title = data[i]['title'];
    var link = data[i]['songUrl'];

    var articleDiv = document.createElement('div');
    var titleHeader = document.createElement('h3');
    var artistText = document.createElement('p');
    var songLink = document.createElement('a');

    articleDiv.appendChild(songLink);
    songLink.appendChild(titleHeader);
    articleDiv.appendChild(artistText);


    var titleContent = document.createTextNode(title);
    var artistContent = document.createTextNode('Artist: ' + artist);
    songLink.setAttribute('href', link);
    songLink.setAttribute('target', '_target');


    articleDiv.appendChild(artistContent);
    titleHeader.appendChild(titleContent);
    artistText.appendChild(artistContent);

    songContainer.appendChild(articleDiv);

  }



}

function clearList() {
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
}

function clearMusicList() {
  while (songContainer.firstChild) {
    songContainer.removeChild(songContainer.firstChild);
  }
}