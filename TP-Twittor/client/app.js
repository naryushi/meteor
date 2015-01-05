//client only code

/*
  3.2  Depuis le client souscriver à la publication
*/
Meteor.subscribe('Tweets');

/*
  1.2
  Creer le helpers contenant un fonction tweets
  qui retourne tout les tweets de la collection Tweets
*/
Template.TweetsGeneral.helpers({
  tweets: function () {
    return Tweets.find();
  }
});

/*
  2.3
  Creer l'event pour l'ajout d'un tweet dans la collection
  juste avec les champs login et post
  (pas de champs valide ou a false pour la suite du TP) 
*/
Template.formAddTweet.events({
  "submit .formAddTweet": function() {
      var tweet = 
        {
          login: event.target.login.value,
          post: event.target.post.value,
        };
    Tweets.insert(tweet);
    return false;
  }
});