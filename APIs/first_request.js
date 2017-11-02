
var request = require("request");
request('http://jaynejacobs.com' , function(error, response, body) {
    if(error){
        console.log("Something is wrong");
        console.log(error);
    }else{
        if(response.statusCode == 200){
            //THINGS WORKED!!
            console.log(body);
        }
    }
            
});


request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys' , function(error, response, body) {
    if(error){
        console.log("Asked for Google but no go");
        console.log(error);
    }else{
        if(response.statusCode == 200){
            //THINGS WORKED!!
            console.log(body);
        }
    }
            
});
