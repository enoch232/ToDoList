var configValues = require('./config');
module.exports = {
	getDbConnectionString: function(){

		return 'mongodb://'+configValues.username + ':'+configValues.password + '@ds013898.mlab.com:13898/todoapp';
	}
}