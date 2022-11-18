const router = require('express').Router();
const FilmsController = require('../controllers/FilmsController');


router.get('/', FilmsController.getAll);
router.get('/:id', FilmsController.getById);
router.get('/title/:title', FilmsController.getByTitle);
router.get('/genre/:genre', FilmsController.getByGenre);
router.get('/toprated/:toprated',FilmsController.getByToprated);


module.exports = router;