
const FOOD_COLLECTION = 'food';
let Db = require('mongodb').Db,
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
	ReplSetServers = require('mongodb').ReplSetServers,
	ObjectID = require('mongodb').ObjectID,
	Binary = require('mongodb').Binary,
	GridStore = require('mongodb').GridStore,
	Grid = require('mongodb').Grid,
	Code = require('mongodb').Code,
	BSON = require('mongodb').pure().BSON,
	assert = require('assert');

let FoodProvider = function() {
	var that = this;
	mongodbUri = process.env.MONGOLAB_URI || 'mongodb://mongodb';
	MongoClient.connect(mongodbUri, function(err, db){
		if(err) { return console.dir(err); }
		that.db = db;
	})
};


FoodProvider.prototype.getAll = () => {
	this.db.collection(FOOD_COLLECTION, () => {

	});
};
