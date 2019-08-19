let restaurant_service = require('../service/restaurant_service');

let Error = require('../model/error.model');

const RestaurantController = {
};

RestaurantController.restaurant_getAll = (req, res) => {
	page = {page: req.params.page, size: req.params.size, order: req.params.order};
	restaurant_service.findAll(page, (err, restaurants) => {
		if(err) {
			res.send(err.status, Error.FilterPrototypeForResponse(err));
		}
		res.send(restaurants);
	});
};

RestaurantController.restaurant_getById = (req, res) => {
	restaurant_service.findById(req.params.id, (err, restaurant) => {
		if(err) {
			res.send(err.status, Error.FilterPrototypeForResponse(err));
		} else {
			if(restaurant) {
				res.send(Error.NOT_FOUND_STATUS, Error.FilterPrototypeForResponse(Error.NotFoundError()));
			} else {
				res.send(restaurant);
			}
		}
	});
};


RestaurantController.restaurant_create = (req, res, next) => {
	restaurant_service.createNewRestaurant(body, (err, result) => {
		if(err) {
			console.log('I have an error');
			res.send(err.status, Error.FilterPrototypeForResponse(err));
		}
		res.send(result);
	});
};

RestaurantController.restaurant_update = (req, res) => {
	let body =req.body;
	if(!body.id) {
		res.send(Error.FilterPrototypeForResponse(Error.NotValidRequest()), Error.NOT_VALID_REQUEST_STATUS);
	}
	restaurant_service.updateRestaurant(body, (err, result) => {
		if(err) {
			console.log('I have an error');
			res.send(err.status, Error.FilterPrototypeForResponse(err));
		}
		res.send(result);
	});
};

RestaurantController.delete_restaurant = (req, res) => {
	const id = req.params.id;
	if(!id) {
		console.error("The id is required to the delete operations");
		res.status(Error.NOT_VALID_REQUEST_STATUS).send(Error.FilterPrototypeForResponse(Error.NotValidRequest()));
	} else {
		restaurant_service.deleteById(id, (err) => {
			if(err) {
				res.status(Error.INTERNAL_SERVER_ERROR).send(Error.FilterPrototypeForResponse(Error.UnhanddleError()))
			} else {
				res.status(204).send();
			}
		});
	}
};

module.exports = RestaurantController;
