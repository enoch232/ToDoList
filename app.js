var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/todolist");
var db = mongoose.connection;
Todo = require('./models/todo');
app.get('/api/todos', function(req, res){
	Todo.getTodos(function(err, todos){
		if (err){
			throw err;
		}
		res.json(todos);
	});
});
app.get('/api/todos/:_id', function(req, res){
	Todo.getTodo(req.params._id, function(err, todo){
		if (err){
			throw err;
		}
		res.json(todo);
	});
});
app.post('/api/todos', function(req, res){
	Todo.addTodo(req.body.title, function(err, todo){
		if (err){
			throw err;
		}
		res.json(todo);
	});
});
app.put('/api/todos/:_id', function(req, res){
	Todo.updateTodo(req.params._id, req.body, {}, function(err, todo){
		if (err){
			throw err;
		}
		res.json(todo);
	});
});
app.delete('/api/todos/:_id', function(req, res){
	Todo.deleteTodo(req.params._id, function(err, todo){
		if (err){
			throw err;
		}
		res.json(todo);
	});

});
app.listen(3000);
console.log("Server now running at port 3000...");