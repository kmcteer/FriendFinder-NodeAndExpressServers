var express = require('express');
var app = express();


var PORT = process.env.PORT || 8000;



 
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: true }));
 
app.use(express.json());

var apiRoutes = require("./FriendFinder/app/routing/apiRoutes");
var htmlRoutes =require("./FriendFinder/app/routing/htmlRoutes");
app.use(apiRoutes)
app.use(htmlRoutes)
// server start up
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});