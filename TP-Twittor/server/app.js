//server only code

Meteor.startup(function () {
  if (Tweets.find().count() === 0) {
    var tweets = [
      {login:"toto", post:"post1"},
      {login:"titi", post:"post2"}
      ];
    _.each(tweets, function (tweet) {
      Tweets.insert({
        login: tweet.login,
        post: tweet.post,
        valide: true
      });
    });
  }
});


Meteor.publish('Tweets', function() {
  return Tweets.find();
});

//6.1
Meteor.methods({
  insertTweet: function(tweet) {
    return Tweets.insert(tweet);
  }
});

