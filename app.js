var express = require('express');
var bodyParser = require('body-parser');

var restaurant = require('./routes/restaurant'); // Imports routes for the products
let index = require('./routes/index');
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/refeers_restaurant';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/restaurant', restaurant);
app.use('/', index);

const PORT = 5000;
app.listen(PORT);
module.exports=app;
