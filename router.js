const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
// const FilmsRouter = require('./views/FilmsRouter');
// const SeriesRouter = require('./views/SeriesRouter');
// const OrdersFilmsRouter = require('./views/OrdersFilmsRouter');
// const OrdersSeriesRouter = require('./views/OrdersSeriesRouter');

router.use('/users', UsersRouter);
// router.use('/films', FilmsRouter);
// router.use('/series', SeriesRouter);
// router.use('/ofilms', OrdersFilmsRouter);
// router.use('/oseries', OrdersSeriesRouter);

module.exports = router;