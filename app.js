var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
app.set('view engine','ejs');
mongoose.connect(config.getDbConnectionString());
app.get('/',function(req, res){[]
	res.render('index');
});
app.listen(3000);
console.log("server is now running at port 3000...")