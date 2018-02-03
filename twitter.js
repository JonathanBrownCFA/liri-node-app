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

//another
Example Request
GET https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4

Example Response
{
  "statuses": [
    {
      "coordinates": null,
      "favorited": false,
      "truncated": false,
      "created_at": "Mon Sep 24 03:35:21 +0000 2012",
      "id_str": "250075927172759552",
      "entities": {
        "urls": [

        ],
        "hashtags": [
          {
            "text": "freebandnames",
            "indices": [
              20,
              34
            ]
          }
        ],
        "user_mentions": [

        ]
      },
      "in_reply_to_user_id_str": null,
      "contributors": null,
      "text": "Aggressive Ponytail #freebandnames",
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "retweet_count": 0,
      "in_reply_to_status_id_str": null,
      "id": 250075927172759552,
      "geo": null,
      "retweeted": false,
      "in_reply_to_user_id": null,
      "place": null,
      "user": {
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_sidebar_border_color": "C0DEED",
        "profile_background_tile": false,
        "name": "Sean Cummings",
        "profile_image_url": "http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
        "created_at": "Mon Apr 26 06:01:55 +0000 2010",
        "location": "LA, CA",
        "follow_request_sent": null,
        "profile_link_color": "0084B4",
        "is_translator": false,
        "id_str": "137238150",
        "entities": {
          "url": {
            "urls": [
              {
                "expanded_url": null,
                "url": "",
                "indices": [
                  0,
                  0
                ]
              }
            ]
          },
          "description": {
            "urls": [

            ]
          }
        },
        "default_profile": true,
        "contributors_enabled": false,
        "favourites_count": 0,
        "url": null,
        "profile_image_url_https": "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
        "utc_offset": -28800,
        "id": 137238150,
        "profile_use_background_image": true,
        "listed_count": 2,
        "profile_text_color": "333333",
        "lang": "en",
        "followers_count": 70,
        "protected": false,
        "notifications": null,
        "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme1/bg.png",
        "profile_background_color": "C0DEED",
        "verified": false,
        "geo_enabled": true,
        "time_zone": "Pacific Time (US & Canada)",
        "description": "Born 330 Live 310",
        "default_profile_image": false,
        "profile_background_image_url": "http://a0.twimg.com/images/themes/theme1/bg.png",
        "statuses_count": 579,
        "friends_count": 110,
        "following": null,
        "show_all_inline_media": false,
        "screen_name": "sean_cummings"
      },
      "in_reply_to_screen_name": null,
      "source": "Twitter for Mac",
      "in_reply_to_status_id": null
    },
    {
      "coordinates": null,
      "favorited": false,
      "truncated": false,
      "created_at": "Fri Sep 21 23:40:54 +0000 2012",
      "id_str": "249292149810667520",
      "entities": {
        "urls": [

        ],
        "hashtags": [
          {
            "text": "FreeBandNames",
            "indices": [
              20,
              34
            ]
          }
        ],
        "user_mentions": [

        ]
      },
      "in_reply_to_user_id_str": null,
      "contributors": null,
      "text": "Thee Namaste Nerdz. #FreeBandNames",
      "metadata": {
        "iso_language_code": "pl",
        "result_type": "recent"
      },
      "retweet_count": 0,
      "in_reply_to_status_id_str": null,
      "id": 249292149810667520,
      "geo": null,
      "retweeted": false,
      "in_reply_to_user_id": null,
      "place": null,
      "user": {
        "profile_sidebar_fill_color": "DDFFCC",
        "profile_sidebar_border_color": "BDDCAD",
        "profile_background_tile": true,
        "name": "Chaz Martenstein",
        "profile_image_url": "http://a0.twimg.com/profile_images/447958234/Lichtenstein_normal.jpg",
        "created_at": "Tue Apr 07 19:05:07 +0000 2009",
        "location": "Durham, NC",
        "follow_request_sent": null,
        "profile_link_color": "0084B4",
        "is_translator": false,
        "id_str": "29516238",
        "entities": {
          "url": {
            "urls": [
              {
                "expanded_url": null,
                "url": "http://bullcityrecords.com/wnng/",
                "indices": [
                  0,
                  32
                ]
              }
            ]
          },
          "description": {
            "urls": [

            ]
          }
        },
        "default_profile": false,
        "contributors_enabled": false,
        "favourites_count": 8,
        "url": "http://bullcityrecords.com/wnng/",
        "profile_image_url_https": "https://si0.twimg.com/profile_images/447958234/Lichtenstein_normal.jpg",
        "utc_offset": -18000,
        "id": 29516238,
        "profile_use_background_image": true,
        "listed_count": 118,
        "profile_text_color": "333333",
        "lang": "en",
        "followers_count": 2052,
        "protected": false,
        "notifications": null,
        "profile_background_image_url_https": "https://si0.twimg.com/profile_background_images/9423277/background_tile.bmp",
        "profile_background_color": "9AE4E8",
        "verified": false,
        "geo_enabled": false,
        "time_zone": "Eastern Time (US & Canada)",
        "description": "You will come to Durham, North Carolina. I will sell you some records then, here in Durham, North Carolina. Fun will happen.",
        "default_profile_image": false,
        "profile_background_image_url": "http://a0.twimg.com/profile_background_images/9423277/background_tile.bmp",
        "statuses_count": 7579,
        "friends_count": 348,
        "following": null,
        "show_all_inline_media": true,
        "screen_name": "bullcityrecords"
      },
      "in_reply_to_screen_name": null,
      "source": "web",
      "in_reply_to_status_id": null
    },
    {
      "coordinates": null,
      "favorited": false,
      "truncated": false,
      "created_at": "Fri Sep 21 23:30:20 +0000 2012",
      "id_str": "249289491129438208",
      "entities": {
        "urls": [

        ],
        "hashtags": [
          {
            "text": "freebandnames",
            "indices": [
              29,
              43
            ]
          }
        ],
        "user_mentions": [

        ]
      },
      "in_reply_to_user_id_str": null,
      "contributors": null,
      "text": "Mexican Heaven, Mexican Hell #freebandnames",
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "retweet_count": 0,
      "in_reply_to_status_id_str": null,
      "id": 249289491129438208,
      "geo": null,
      "retweeted": false,
      "in_reply_to_user_id": null,
      "place": null,
      "user": {
        "profile_sidebar_fill_color": "99CC33",
        "profile_sidebar_border_color": "829D5E",
        "profile_background_tile": false,
        "name": "Thomas John Wakeman",
        "profile_image_url": "http://a0.twimg.com/profile_images/2219333930/Froggystyle_normal.png",
        "created_at": "Tue Sep 01 21:21:35 +0000 2009",
        "location": "Kingston New York",
        "follow_request_sent": null,
        "profile_link_color": "D02B55",
        "is_translator": false,
        "id_str": "70789458",
        "entities": {
          "url": {
            "urls": [
              {
                "expanded_url": null,
                "url": "",
                "indices": [
                  0,
                  0
                ]
              }
            ]
          },
          "description": {
            "urls": [

            ]
          }
        },
        "default_profile": false,
        "contributors_enabled": false,
        "favourites_count": 19,
        "url": null,
        "profile_image_url_https": "https://si0.twimg.com/profile_images/2219333930/Froggystyle_normal.png",
        "utc_offset": -18000,
        "id": 70789458,
        "profile_use_background_image": true,
        "listed_count": 1,
        "profile_text_color": "3E4415",
        "lang": "en",
        "followers_count": 63,
        "protected": false,
        "notifications": null,
        "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme5/bg.gif",
        "profile_background_color": "352726",
        "verified": false,
        "geo_enabled": false,
        "time_zone": "Eastern Time (US & Canada)",
        "description": "Science Fiction Writer, sort of. Likes Superheroes, Mole People, Alt. Timelines.",
        "default_profile_image": false,
        "profile_background_image_url": "http://a0.twimg.com/images/themes/theme5/bg.gif",
        "statuses_count": 1048,
        "friends_count": 63,
        "following": null,
        "show_all_inline_media": false,
        "screen_name": "MonkiesFist"
      },
      "in_reply_to_screen_name": null,
      "source": "web",
      "in_reply_to_status_id": null
    },
    {
      "coordinates": null,
      "favorited": false,
      "truncated": false,
      "created_at": "Fri Sep 21 22:51:18 +0000 2012",
      "id_str": "249279667666817024",
      "entities": {
        "urls": [

        ],
        "hashtags": [
          {
            "text": "freebandnames",
            "indices": [
              20,
              34
            ]
          }
        ],
        "user_mentions": [

        ]
      },
      "in_reply_to_user_id_str": null,
      "contributors": null,
      "text": "The Foolish Mortals #freebandnames",
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "retweet_count": 0,
      "in_reply_to_status_id_str": null,
      "id": 249279667666817024,
      "geo": null,
      "retweeted": false,
      "in_reply_to_user_id": null,
      "place": null,
      "user": {
        "profile_sidebar_fill_color": "BFAC83",
        "profile_sidebar_border_color": "615A44",
        "profile_background_tile": true,
        "name": "Marty Elmer",
        "profile_image_url": "http://a0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png",
        "created_at": "Mon May 04 00:05:00 +0000 2009",
        "location": "Wisconsin, USA",
        "follow_request_sent": null,
        "profile_link_color": "3B2A26",
        "is_translator": false,
        "id_str": "37539828",
        "entities": {
          "url": {
            "urls": [
              {
                "expanded_url": null,
                "url": "http://www.omnitarian.me",
                "indices": [
                  0,
                  24
                ]
              }
            ]
          },
          "description": {
            "urls": [

            ]
          }
        },
        "default_profile": false,
        "contributors_enabled": false,
        "favourites_count": 647,
        "url": "http://www.omnitarian.me",
        "profile_image_url_https": "https://si0.twimg.com/profile_images/1629790393/shrinker_2000_trans_normal.png",
        "utc_offset": -21600,
        "id": 37539828,
        "profile_use_background_image": true,
        "listed_count": 52,
        "profile_text_color": "000000",
        "lang": "en",
        "followers_count": 608,
        "protected": false,
        "notifications": null,
        "profile_background_image_url_https": "https://si0.twimg.com/profile_background_images/106455659/rect6056-9.png",
        "profile_background_color": "EEE3C4",
        "verified": false,
        "geo_enabled": false,
        "time_zone": "Central Time (US & Canada)",
        "description": "Cartoonist, Illustrator, and T-Shirt connoisseur",
        "default_profile_image": false,
        "profile_background_image_url": "http://a0.twimg.com/profile_background_images/106455659/rect6056-9.png",
        "statuses_count": 3575,
        "friends_count": 249,
        "following": null,
        "show_all_inline_media": true,
        "screen_name": "Omnitarian"
      },
      "in_reply_to_screen_name": null,
      "source": "Twitter for iPhone",
      "in_reply_to_status_id": null
    }
  ],
  "search_metadata": {
    "max_id": 250126199840518145,
    "since_id": 24012619984051000,
    "refresh_url": "?since_id=250126199840518145&q=%23freebandnames&result_type=mixed&include_entities=1",
    "next_results": "?max_id=249279667666817023&q=%23freebandnames&count=4&include_entities=1&result_type=mixed",
    "count": 4,
    "completed_in": 0.035,
    "since_id_str": "24012619984051000",
    "query": "%23freebandnames",
    "max_id_str": "250126199840518145"
  }
}