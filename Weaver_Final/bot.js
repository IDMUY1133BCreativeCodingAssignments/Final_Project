/* took some code from Shiftman */


var Twitter = require ('twit');

var config = require('./config');
console.log(config);
var T = new Twitter(config);
T.get('search/tweets', { q: '#prayforparis', count: 100 }, function(err, data, response) {
  console.log(data)
})

/*this link should give me the json data 
I want according to Twitter API Documentation
currently not working
wondering if it has something to do with access key */

// https://api.twitter.com/1.1/search/tweets.json?f=&vertical=default&q=%23pray%20for%20paris 
