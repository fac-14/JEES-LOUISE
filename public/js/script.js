/* eslint-disable */

function requestData(url, cb) {
  console.log('url ' + url);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      data = JSON.parse(xhr.responseText);
      cb(data);
      return data;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}