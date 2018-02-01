//  * `my-tweets`
// https://www.npmjs.com/package/twitter
//looking for activity stream
//https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/intro-to-tweet-json
// 7 day search

GET https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4
//https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.get(path, params, callback);
client.post(path, params, callback);
client.stream(path, params, callback);

client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })

  We want to search for Tweets referencing @TwitterDev account. First, we run the search on twitter.com/search
Check and copy the URL loaded. In this case, we got: https://twitter.com/search?q=%40twitterdev
Replace https://twitter.com/search with https://api.twitter.com/1.1/search/tweets.json and you will get: https://api.twitter.com/1.1/search/tweets.json?q=%40twitterdev
Run a Twurl command to execute the search.

We want to search for Tweets referencing @twitterapi account. First, we run the search on twitter.com/search
Check and copy the URL loaded. In this case, we got: https://twitter.com/search?q=%40twitterapi
Replace “https://twitter.com/search” with “https://api.twitter.com/1.1/search/tweets.json” and you will get: https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi
Execute this URL to do the search in the API
https://aem-author-staging.twitter.biz/console.html

Sample Tweet with 280 characters
  {
  "created_at": "Tue Sep 26 21:00:22 +0000 2017",
  "id": 912783930431905797,
  "id_str": "912783930431905797",
  "text": "Can\u2019t fit your Tweet into 140 characters? \ud83e\udd14\n\nWe\u2019re trying something new with a small group, and increasing the char\u2026 https:\/\/t.co\/y1rJlHsVB5",
  "source": "<a href=\"http:\/\/twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
  "truncated": true,
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
    "id": 783214,
    "id_str": "783214",
    "name": "Twitter",
    "screen_name": "Twitter",
    "location": "San Francisco, CA",
    "url": "https:\/\/blog.twitter.com\/",
    "description": "Your official source for what\u2019s happening.\n\nNeed a hand? Visit https:\/\/support.twitter.com",
    "translator_type": "regular",
    "derived": {
      "locations": [
        {
          "country": "United States",
          "country_code": "US",
          "locality": "San Francisco",
          "region": "California",
          "sub_region": "San Francisco County",
          "full_name": "San Francisco, California, United States",
          "geo": {
            "coordinates": [
              -122.41942,
              37.77493
            ],
            "type": "point"
          }
        }
      ]
    },
    "protected": false,
    "verified": true,
    "followers_count": 61984546,
    "friends_count": 167,
    "listed_count": 90945,
    "favourites_count": 5165,
    "statuses_count": 6148,
    "created_at": "Tue Feb 20 14:35:54 +0000 2007",
    "utc_offset": -25200,
    "time_zone": "Pacific Time (US & Canada)",
    "geo_enabled": true,
    "lang": "en",
    "contributors_enabled": false,
    "is_translator": false,
    "profile_background_color": "ACDED6",
    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/657090062\/l1uqey5sy82r9ijhke1i.png",
    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/657090062\/l1uqey5sy82r9ijhke1i.png",
    "profile_background_tile": true,
    "profile_link_color": "1B95E0",
    "profile_sidebar_border_color": "FFFFFF",
    "profile_sidebar_fill_color": "F6F6F6",
    "profile_text_color": "333333",
    "profile_use_background_image": true,
    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/875087697177567232\/Qfy0kRIP_normal.jpg",
    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/875087697177567232\/Qfy0kRIP_normal.jpg",
    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/783214\/1503522865",
    "default_profile": false,
    "default_profile_image": false,
    "following": null,
    "follow_request_sent": null,
    "notifications": null
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "is_quote_status": false,
  "extended_tweet": {
    "full_text": "Can\u2019t fit your Tweet into 140 characters? \ud83e\udd14\n\nWe\u2019re trying something new with a small group, and increasing the character limit to 280! Excited about the possibilities? Read our blog to find out how it all adds up. \ud83d\udc47\nhttps:\/\/t.co\/C6hjsB9nbL",
    "display_text_range": [
      0,
      239
    ],
    "entities": {
      "hashtags": [
        
      ],
      "urls": [
        {
          "url": "https:\/\/t.co\/C6hjsB9nbL",
          "expanded_url": "https:\/\/cards.twitter.com\/cards\/gsby\/4ubsj",
          "display_url": "cards.twitter.com\/cards\/gsby\/4ub\u2026",
          "unwound": {
            "url": "https:\/\/cards.twitter.com\/cards\/gsby\/4ubsj",
            "status": 200,
            "title": "Giving you more characters to express yourself",
            "description": null
          },
          "indices": [
            216,
            239
          ]
        }
      ],
      "user_mentions": [
        
      ],
      "symbols": [
        
      ]
    }
  },
  "quote_count": 0,
  "reply_count": 16027,
  "retweet_count": 47906,
  "favorite_count": 78829,
  "entities": {
    "hashtags": [
      
    ],
    "urls": [
      {
        "url": "https:\/\/t.co\/y1rJlHsVB5",
        "expanded_url": "https:\/\/twitter.com\/i\/web\/status\/912783930431905797",
        "display_url": "twitter.com\/i\/web\/status\/9\u2026",
        "indices": [
          117,
          140
        ]
      }
    ],
    "user_mentions": [
      
    ],
    "symbols": [
      
    ]
  },
  "favorited": false,
  "retweeted": false,
  "possibly_sensitive": false,
  "filter_level": "low",
  "lang": "en",
  "matching_rules": [
    {
      "tag": null
    }
  ]
}