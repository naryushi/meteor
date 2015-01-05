//code shared between client and server

Tweets = new Mongo.Collection("tweets");

//5.2
Tweets.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});

//4.2
Router.configure({
  layoutTemplate: 'layout'
});

//4.5
Router.map(function() {
  this.route('home', {path: '/'});
  this.route('submit', {path: '/submit'});
});
