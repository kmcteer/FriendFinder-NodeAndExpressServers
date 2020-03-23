var friends = require("../data/friends.js");
var express = require("express");
var bodyParser = require("body-parser");
var apirouter = express.Router();

// list of frineds
apirouter.get("/api/friends", function (req, res) {
    res.json(friends);
})


//  The function to find a new friend
apirouter.post("/api/friends", function (req, res) {
    console.log("almost there...");
    var newFriend = req.body;
    var array = req.body.scores
    console.log(newFriend);
    console.log("array: ", array)



    // Function for returning the users into an array  var newScore = function(array){
    var newScore = [];
    for (var i = 0; i < array.length; i++) {
        newScore.push(parseInt(array[i]));
    }
 
    var minDiff = 100
    var matchFriend={
        name:"",
        photo:""
    }

    for (var i = 0; i<friends.length; i++){
        var scores = friends[i].scores
        var dif = 0
        for (var j=0; j<scores.length; j++){
            dif = dif + (Math.abs(scores[j]- newScore[j]))   

        }
        if (dif<minDiff ){
            matchFriend.name = friends[i].name;
            matchFriend.photo = friends[i].photo;
            minDiff = dif
        }
    }

    //     The function to calculate the diff between two arrays then adding a diff
    // var totalDiff = function (arrA, arrB) {
    //     delta = 0;
    //     for (var i = 0; i < arrA.length; i++) {
    //         delta += Math.abs(arrA[i] - arrB[i]);
    //     }
    //     return delta;

    //     function indexOfMin(array) {
    //         if (array.length === 0) {
    //             return -1;
    //         }

    //         var min = array[0];
    //         var minIndex = 0;

    //         for (var i = 1; i < array.length; i++) {
    //             if (array[i] < min) {
    //                 minIndex = i;
    //                 min = array[i];
    //             }
    //         }

    //         return minIndex;
    //     }

    //     var newFriendOutcome = newScore(newFriend['scores[]']);
    //     var currentFriendOutcome = [];
    //     var differences = [];

    //     for (var i = 0; i < friends.length; i++) {
    //         currentFriendOutcome.push(newScore(friends[i]['scores[]']));
    //     }

    //     //  The for loop function that takes differences bewteen current and new friend results  
    //     for (var i = 0; i < currentFriendOutcome.length; i++) {
    //         differences.push(totalDiff(newFriendOutcome, currentFriendOutcome[i]));
    //     }
    //     console.log("Calculating scores...");


    //     var minFriend = indexOfMin(differences);
    //     var matchFriend = friends[minFriend];
    //     console.log("Matching...");
    //     console.log(matchFriend);


        friends.push(newFriend);
        console.log("matchfriend:", matchFriend)
        res.json(matchFriend);

    })


module.exports = apirouter;



