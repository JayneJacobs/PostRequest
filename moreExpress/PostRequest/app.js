var express = require("express");
var app = express();
var bodyParser = require("body-parser");
 var songs = [
        "Song1",
        "Song1",
        "Song1",
        "Song2",
        "Song2",
        "Song2"
        ]
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    
    res.render("home");
    // body...
} );


// #"/friends"
app.post("/adSong", function(req, res){
    var newSong = (req.body.newSong);
    songs.push(newSong);
    res.redirect("/songs");
});


app.get("/songs", function (req, res) {
   
   res.render("songs", {songs: songs});
});



app.listen(process.env.PORT, process.env.IP, function function_name() {
    console.log("Server started!!");
});
