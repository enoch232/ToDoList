var express = require('express');
var mongoose = require('mongoose');
var app = express();
var todo = require('./models/ToDo');
app.get('/api/todos', function(req, res){
	
});
app.get('/api/todo/_:id', function(req, res){


});
app.post('/api/todo', function(req, res){

});

app.listen(3000);
console.log("Server now running at port 3000...");