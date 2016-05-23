var mongoose = require('mongoose');
var todoSchema = mongoose.Schema({
	title: String,
	finished: Boolean
});
var todo = module.exports = mongoose.model('todo',todoSchema);
module.exports.getTodos = function(callback){
	ToDo.find(callback);
}