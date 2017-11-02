var faker = require('faker');


console.log("===============================");
console.log("WELCOME TO MY SHOP!");
console.log("===============================");

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

var randomProduct = faker.commerce.productName();// random Product Data
var randomPrice  = faker.commerce.price();//random Price
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
for (var i = 0; i < 10; i++) {
   console.log(faker.commerce.productName(),  "  -  $", faker.commerce.price());
}




