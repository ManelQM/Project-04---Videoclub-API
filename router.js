const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');

const FilmsRouters = require('./views/FilmsRouters');
// const SeriesRouter = require('./views/SeriesRouter');
// const OrdersFilmsRouter = require('./views/OrdersFilmsRouter');
// const OrdersSeriesRouter = require('./views/OrdersSeriesRouter');

router.use('/users', UsersRouter);
router.use('/films', FilmsRouters);
// router.use('/series', SeriesRouter);
// router.use('/ofilms', OrdersFilmsRouter);
// router.use('/oseries', OrdersSeriesRouter);

module.exports = router;