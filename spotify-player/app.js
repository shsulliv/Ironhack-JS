// var button = document.getElementById("Search")

var request = new XMLHttpRequest();
request.open('GET', 'https://api.spotify.com/v1/search', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

// function searchSpotify (term) {
// 	button.addEventListener()

// }