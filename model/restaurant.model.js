const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
	name: {type: String, required: true, max: 100},
	partnerName: {type: String, required: true, max: 100},
	partnerLastName: {type: String, required: true, max: 100},
	number: {type: Number, required: false},
	city: {type: String, required: true},
	street: {type: String, required: true},
	intersection: {type: String, required:false},
	foodType: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('Restaurant', RestaurantSchema);
