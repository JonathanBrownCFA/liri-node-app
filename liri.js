var liri = require("liri")
https://www.npmjs.com/package/liri

//### BONUS
//
//* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
//
//* Make sure you append each command you run to the `log.txt` file. 
//
//* Do not overwrite your file each time you run a command.
//
//node liri.js do-what-it-says`
  // 
  // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//
require('dotenv').config()
// var dotenv = require('dotenv').config({path: '/home/debian9os/Bootcamp/nodehw/liri-node-app/.env'})

console.log(process.env.SPOTIFY_ID)
console.log(process.env.SPOTIFY_SECRET)
console.log(process.env.TWITTER_CONSUMER_KEY)
console.log(process.env.TWITTER_CONSUMER_SECRET)
console.log(process.env.TWITTER_ACCESS_TOKEN_KEY)
console.log(process.env.TWITTER_ACCESS_TOKEN_SECRET)

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var spotify = process.env.SPOTIFY_ID
console.log(spotify)

var client = process.env.TWITTER_CONSUMER_KEY
console.log(client)
