//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//const ejs = require("ejs");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
var items = ["Buy ticket","Cook Food","Eat Food"];
app.get("/", function(req,res){
	var today = new Date();
	var options = {
		weekday:"long",
		day:"numeric",
		month:"long"
	};

	var day = today.toLocaleDateString("en-US",options);
	console.log(day);
	res.render("list", {kindofday:day, newitem:items});
});
app.post("/",function(req,res){
	var input = req.body.name;
	items.push(input);
	//console.log(input);
	res.redirect("/");
});

app.listen(2000, function(){
	console.log("server started");
});