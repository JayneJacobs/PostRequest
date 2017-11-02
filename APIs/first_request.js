
var request = require("request");
request('http://jaynejacobs.com' , function(error, response, body) {
    if(error){
        console.log("Somethint is wrong");
        console.log(error);
    }else{
        if(response.statusCode == 200){
            //THINGS WORKED!!
            console.log(body);
        }
    }
            
});
