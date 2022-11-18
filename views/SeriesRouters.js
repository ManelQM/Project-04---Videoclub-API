const router = require('express').Router();

const SeriesController = require('../controllers/SeriesController');

router.get('/:id', SeriesController.getById);
router.get('/title/:title', SeriesController.getByTitle);
router.get('/genre/:genre', SeriesController.getByGenre);
router.get('/toprated/:toprated',SeriesController.getByToprated);
module.exports = router;