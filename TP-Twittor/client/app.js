//client only code


Meteor.subscribe('Tweets');

Template.TweetsGeneral.helpers({
  tweets: function () {
    return Tweets.find();
  }
});

Template.formAddTweet.events({
  "submit .formAddTweet": function() {
    var tweet = 
      {
/*5.3*/ login: Meteor.user().emails[0].address,
        post: event.target.post.value,
        valide: true
      };
    Router.go("home");
//6.2
    Meteor.call("insertTweet", tweet);
    return false;
  }
});