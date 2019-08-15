let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});
router.post('/', (req,res,next) => {
	res.send({
		id:1,
		name: 'Plato 1',
		description: 'Plato 1 con ciertos componentes'
	});
});

module.exports = router;
