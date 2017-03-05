var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Log reqs with morgan
app.use(morgan('dev'));

//Connect to MongoDB
mongoose.Promise = global.Promise;
//mongodb://localhost:27017/tutorial
// mongodb://pdinh001:toan2082125@ds157469.mlab.com:57469/peter_warehouse
mongoose.connect('mongodb://pdinh001:toan2082125@ds157469.mlab.com:57469/peter_warehouse', function(err){
    if (err) {
        throw err;
    } else {
        console.log('Successfully connected to MongoLab');
    }
});
require('./models/models.js');

//API routes path
var api = require('./routes/api');
app.use('/api', api);

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set public folder
app.use(express.static(__dirname + '/public'));

//index.html
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//Server port
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running on port 3000...');
});