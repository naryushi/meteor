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