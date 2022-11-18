const router = require('express').Router();
const OrdersController = require('../controllers/OrdersController');
  
router.get('/rented/:rented', OrdersController.getByRented);
router.get('/userid/:userid', OrdersController.getByUser);
router.post('/neworder', OrdersController.signUp);
module.exports = router;
