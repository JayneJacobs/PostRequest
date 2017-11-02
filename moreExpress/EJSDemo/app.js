var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");



app.get("/", function (req, res) {
    res.render("home");
//  res.send("<h1>Welcome Home</h1><h2>Nice to see you</h2> ");
    
});

app.get("/love/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});

});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susi"},
        {title: "Post 2", author: "Joe"},
        {title: "Post 3 Is this text", author:"Max"}
        ];
   
    res.render("posts", {posts: posts});
         
});


app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server is listening")
    
});