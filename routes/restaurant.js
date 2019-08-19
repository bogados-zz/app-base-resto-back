let restaurant_controller = require('../controller/restaurant_controller');

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	restaurant_controller.restaurant_getAll(req, res);
});

router.get('/:id', function(req, res, next) {
	restaurant_controller.restaurant_getById(req, res);
});


router.post('/', (req,res,next) => {
	restaurant_controller.restaurant_create(req, res);
});

router.put('/',(req,res,next)=> {
	restaurant_controller.restaurant_update(req, res);
});

router.delete('/:id', (req, res, next) => {
	restaurant_controller.delete_restaurant(req, res)
});

module.exports = router;
