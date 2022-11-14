const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const auth = require('./middlewares/auth');

const FilmsRouters = require('./views/FilmsRouters');
const SeriesRouters = require('./views/SeriesRouters');
const OrdersFilmsRouter = require('./views/OrdersFilmsRouter');
const OrdersSeriesRouter = require('./views/OrdersSeriesRouter');

router.use('/users', UsersRouter);
router.use('/films', FilmsRouters);
router.use('/series', SeriesRouters);
router.use('/ofilms', OrdersFilmsRouter);
router.use('/oseries', OrdersSeriesRouter);

module.exports = router;