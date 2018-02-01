const omdb = require('omdbapi');
//https://www.npmjs.com/package/omdbapi
//https://www.npmjs.com/package/omdb-client
//Here is your key: 13553fb2

//* Title of the movie.
//* Year the movie came out.
//* IMDB Rating of the movie.
//* Rotten Tomatoes Rating of the movie.
//* Country where the movie was produced.
//* Language of the movie.
//* Plot of the movie.
//* Actors in the movie.

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

xample usage
omdb.search({
    search: 'game of thrones',  // required 
    type: 'series',             // optionnal  ['series', 'episode', 'movie'] 
    year: '2011',               // optionnal 
    page: '1'                   // optionnal (1 to 100) 
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);
 
omdb.get({
    id: 'tt0944947',            // optionnal (requires imdbid or title) 
    title: 'Game of Thrones',   // optionnal (requires imdbid or title) 
    season: 1,                  // optionnal 
    episode: 1,                 // optionnal 
    type: 'series',             // optionnal ['series', 'episode', 'movie'] 
    plot: 'full',               // optionnal (defaults to 'short') 
    tomatoes: true,             // optionnal (get rotten tomatoes ratings) 
    year: '2011'                // optionnal 
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);

//alternate
//omdb-client
var params = {
    title: 'Terminator',
    year: 2012
}
window.omdb.get(params, function(err, data) {
    // process response... 
});

'use strict';

/**
 * Module dependencies.
 */
 
var omdbApi = require('../index');

// var apiKey = 'XXXXXXXX';

var output = function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);	
	}
};

/**
 * Find movie by title.
 */
omdbApi.get({
	title: 'Terminator',
	year: 2012,
}, output);

/**
 * Find movie by id.
 */
omdbApi.get({
	id: 'tt0276751'
}, output);

/**
 * Find series by title & type.
 */
omdbApi.get({
	title: 'Terminator',
	type: 'series'
}, output);

/**
 * Find movies by title & type. Inlcude full plot and rotten tomatoes review.
 */
omdbApi.get({
	title: 'Milk',
	type: 'movie',
	plot: 'full',
	incTomatoes: true
}, output);

Search
Search movies:

Server-Side
var omdbApi = require('omdb-client');
 
var params = {
    query: 'Terminator',
    year: 2012
}
omdbApi.search(params, function(err, data) {
    // process response... 
});
Front-End
var params = {
    query: 'Terminator',
    year: 2012
}
window.omdb.search(params, function(err, data) {
    // process response... 
});
