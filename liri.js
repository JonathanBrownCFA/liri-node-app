// read & write with fs package
var fs = require('fs');
// action is my-tweets, movies-this, etc
var action = process.argv[2];
// input is the song, twitter handle, movie, etc
var value = process.argv[3];
// which action with be run, similar to if/then
switch (action) {
  case 'my-tweets':
    tweets();
    break;
  case 'spotify-this-song':
    spotify();
    break;
  case 'movie-this':
    movie();
    break;
  case 'do-what-it-says':
    justDoItOk();
    break;
  default:
    console.log('\r~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log("I'm not that smart yet.")
    console.log('\r~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
// Twitter API
function tweets() {
  require('dotenv').config()
  var Twitter = require('twitter');
  var keys = require('./keys.js');
  var client = new Twitter(keys.twitterKeys);
  var params = {
    screen_name: 'TweetPGA',
    count: 20
  };
  client.get('statuses/user_timeline', params, (err, tweets, response) => {
    if (!err && response.statusCode === 200) {
      console.log('Last 20 Tweets:')
      for (i = 0; i < tweets.length; i++) {
        console.log('\r~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('TweetPGA: ' + tweets[i].text);
        console.log('Tweeted On: ' + tweets[i].created_at);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r');
        fs.appendFile(
          'log.txt',
          ('\nTweetPGA: ' + tweets[i].text +
            ' | ' + tweets[i].created_at +
            ' \n'), (err) => {
            if (err) {
              return console.log(err);
            }
          })
      }
    };
  })
};
// Spotify API
function spotify() {
  require('dotenv').config();
  var keys = require('./keys.js');
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotifyKeys);
 
  if (value == null) {
    value = 'Ace of Base';
  }
  spotify.search({
    type: 'track',
    query: value,
    limit: 1
  }, (err, data) => {
    if (err) throw err;
    console.log('\n');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Song Name: ' + data.tracks.items[0].name);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('Preview Link: ' + data.tracks.items[0].external_urls.spotify);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('\n');
    fs.appendFile(
      'log.txt',
      ('\nArtist: ' + data.tracks.items[0].artists[0].name +
        '\nSong: ' + data.tracks.items[0].name +
        '\nPreview Link: ' + data.tracks.items[0].preview_url +
        '\nAlbum: ' + data.tracks.items[0].album.name +
        '\n'), (err) => {
        if (err) {
          return console.log(err);
        }
      })
  })
};
// OMDB Api
function movie() {
  var request = require('request');
 
  var movie = process.argv[3];
  if (!movie) { 
    movie = 'Mr. Nobody';
    console.log('\n');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('Watch Mr Nobody on Netflix');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('\n');
  }
  var queryUrl = 'http://www.omdbapi.com/?t=' + value + '&y=&plot=short&apikey=trilogy';

 
  request(queryUrl, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      console.log('\n');
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log('Title: ' + JSON.parse(body).Title);
      console.log('Year: ' + JSON.parse(body).Year);
      console.log('IMDb Rating: ' + JSON.parse(body).imdbRating);
      console.log('Rotten Tomato Rating: ' + JSON.parse(body).tomatoRating);
      console.log('Country: ' + JSON.parse(body).Country);
      console.log('Language: ' + JSON.parse(body).Language);
      console.log('Plot: ' + JSON.parse(body).Plot);
      console.log('Actors: ' + JSON.parse(body).Actors);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log('\n');
      fs.appendFile(
        'log.txt',
        ('\nTitle: ' + JSON.parse(body).Title +
          '\nYear: ' + JSON.parse(body).Year +
          '\nIMDb Rating: ' + JSON.parse(body).imdbRating +
          '\nRotten Tomato Rating ' + JSON.parse(body).imdbRating +
          '\nCountry: ' + JSON.parse(body).Country +
          '\nLanguage: ' + JSON.parse(body).Language +
          '\nPlot: ' + JSON.parse(body).Plot +
          '\nActors: ' + JSON.parse(body).Actors +
          '\n'), (err) => {
          if (err) {
             console.log('Mr.Nobody');
          }
        })
    }
  })
};
//do-what it says
function justDoItOk() {
  fs.readFile('random.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var dataArr = data.split(',');
    action = dataArr[0];
    value = dataArr[1];
    switch (action) {
      case 'my-tweets':
        tweets();
        break;
      case 'spotify-this-song':
        spotify();
        break;
      case 'movie-this':
        movie();
        break;
      case 'do-what-it-says':
    }
  })
};