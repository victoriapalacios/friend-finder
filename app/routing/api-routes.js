// Dependency for path
var path = require('path')

// Below is how we include our friends variable from friends.js in this file
var friendsVariable = require('../data/friends.js');

module.exports = function(app) {

  // Below is how we grab our friends object from friends.js
  app.get('/api/friends', function(req, res){
      res.json(friendsVariable);
  });

  // Below is how we capture userInput and find the closest friend
  app.post('/friends', function(req, res) {

    var userInputScores = req.body.scores;
    var userInputScoresArray = [];
    var friendMatch = 0;

    for (var i = 0; i < friendsVariable.length; i++) {

      var totalDifference = 0;
      for (var j = 0; j < userInputScores.length; j++) {
        totalDifference += (Math.abs(parseInt(friendsVariable[i].scores[j]) - parseInt(userInputScores[j])));
      }
    }

    // Below is
    userInputScoresArray.push(totalDifference);

    //after all friends are compared, find best match
    for(var i=0; i < userInputScoresArray.length; i++) {
      if(userInputScoresArray[i] <= userInputScoresArray[friendMatch]) {
        friendMatch = i;
      }
    }

    //return friendMatch data
    var bff = friendsVariable[friendMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendsVariable.push(req.body);

  });
};
