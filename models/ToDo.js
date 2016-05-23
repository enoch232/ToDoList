var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
	title: String,
	finished: Boolean
},{collection: "todo"});
var Todo = module.exports = mongoose.model('todo', todoSchema);
module.exports.getTodos = function(callback, limit){
	Todo.find(callback).limit(limit);
}
module.exports.getTodo = function(id, callback){
	Todo.findById(id, callback);
}
module.exports.addTodo = function(newToDo, callback){
	var createtodo = new Todo();
	createtodo.title = newToDo;
	createtodo.finished = false;
	createtodo.save(callback);
}