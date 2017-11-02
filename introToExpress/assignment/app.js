console.log("This is my app");
var express = require("express");
var app = express();

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started");
});

app.get("/", function (req, res) {
    res.send('Welcome to my assignment');
    // body...
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var sound = ""
    if(animal === "cow"){
        sound = "MOO";
    }else if(animal === "pig") {
         sound ="Oink";
    }else if(animal === "dog") {
         sound = "WOOF";
    }
   res.send("The " + animal + " says " + sound); 
} );


app.get('/repeat/:message/:times', function(req, res) {
    var message = req.params.message;
   
    var times = Number(req.params.times);
 
    var result = "";
    for (var i = 0; i < times; i++ ){
       result += message + " ";
    }
    
    res.send(result + "!!!");
});  


app.get('/repeats/:string/:times', function(req, res){
   var string = req.params.string;
   var times = Number(req.params.times);
    for (var i = 0; i < times; i++) {
     string += string + " ";
   }
  res.send(string);
});


app.get("*", function(req, res) {
    res.send("Page Not here: Hows your life?");
});

