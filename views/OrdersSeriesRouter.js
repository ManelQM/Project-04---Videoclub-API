const router = require('express').Router();
const OrdersSeriesController = require('../controllers/OrdersSeriesController');

router.get('/rented/:rented', OrdersSeriesController.getByRented);
router.get('/userid/:userid', OrdersSeriesController.getByUser);
router.post('/neworder', OrdersSeriesController.signUp);



module.exports = router;