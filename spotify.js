//* `spotify-this-song`
//https://www.npmjs.com/package/node-spotify-api
var nodeSpotifyApi = require("node-spotify-api")
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
  Search
search is the EASIEST way to find an artist, album, or track.

search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
Example
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data); 
});
Note: The limit property is optional and the search will default to 20 if one is not supplied.

Usage with Promises
This package also optionally works with promises. Just omit the callback parameter and the search method returns a promise object containing the response:

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
Request
request can be used to make API requests to any Spotify endpoint you supply.

Example
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
