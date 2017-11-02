console.log("OUR EXPRESS APP WILL GO HERE")

var express = require("express");
var app = express();

// "/" => "Hi there!"

app.get("/", function (req, res) {
    res.send('Hello World');
});

app.get("/bye", function (req, res) {
  res.send("goodbye!!");
});

app.get("/dog", function(req, res) {
    console.log("Someone Made a request");
    res.send("MEOW!");
});


app.get("/cat", function(req, res) {
    res.send("ARF!");
    // body...
});
//on a pc (3000) in cloud 9 proccess.env.PORT;
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("Welcome to Commnets")
} );

app.get("*", function(req, res) {
    res.send("You are cool");
} );
