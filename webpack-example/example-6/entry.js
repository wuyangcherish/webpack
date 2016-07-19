require('./style.css')

//js:
// var img2 = document.createElement("img");
// img2.src= require("./2.jpg");
// document.body.appendChild(img2);

// var img2= document.createElement("img");
// img2.src= require("./2.jpg");
// document.body.appendChild(img2);


//jq:

var $ = require("jquery")
var img1 = $("<img />").appendTo("body");
img1.attr("src",require("./2.jpg"))
var img2 = $("<img />").appendTo("body");
img2.attr("src",require("./2.jpg"))