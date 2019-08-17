let Restaurant = require('../model/restaurant.model');
let Error = require('../model/error.model');

const RestaurantService = {};

RestaurantService.findAll = (page, callback) => {
	Restaurant.find({},(err, restaurants) => {
		if(err) {
			console.error(err);
			callback(Error.ServiceNotAvailable)
		} callback(null, restaurants);
	});
};

RestaurantService.findById = (id, callback) => {
	Restaurant.findById(id, (err, restaurant) => {
		if(err){
			console.error(err);
			callback(Error.NotFoundError());
		} else callback(null, restaurant);
	});
};


RestaurantService.createNewRestaurant = (body, callback) => {
	let restaurant = new Restaurant({
		name: body.name,
		partnerName: body.partnerName,
		partnerLastName: body.partnerLastName,
		number: body.number,
		city: body.city,
		street: body.street,
		intersection: body.intersection,
		foodType: body.foodType
	});
	restaurant.save((err) => {
		console.error(err);
		callback(Error.ImposibleToSaveError)
	});
	callback(null, restaurant);
};

RestaurantService.updateRestaurant = async (body, callback) => {
	this.findById(req.id, (err, restaurant) => {
		if (err) {
			callback(err);
		} else {
			mergeElements(restaurant, body).save((err) => {
				console.error(err);
				callback(Error.ImposibleToSaveError)
			});
			callback(null, restaurant);
		}
	});
};

const mergeElements= (persistedElement, newElement) => {
	persistedElement.name= newElement.name? newElement.name:persistedElement.name;
	persistedElement.partnerName= newElement.partnerName? newElement.partnerName:persistedElement.partnerName;
	persistedElement.partnerLastName= newElement.partnerLastName? newElement.partnerLastName:persistedElement.partnerLastName;
	persistedElement.number= newElement.number? newElement.number:persistedElement.number;
	persistedElement.city= newElement.city? newElement.city:persistedElement.city;
	persistedElement.street= newElement.street? newElement.street:persistedElement.street;
	persistedElement.intersection= newElement.intersection? newElement.intersection:persistedElement.intersection;
	persistedElement.foodType= newElement.foodType? newElement.foodType:persistedElement.foodType;
	return persistedElement;
};

module.exports = RestaurantService;
