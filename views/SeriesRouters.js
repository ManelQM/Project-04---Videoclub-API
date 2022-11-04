const router = require('express').Router();

const SeriesController = require('../controllers/SeriesController').



// router.get('/', async (req, res) => {


//     try {

//         let resultado = await Serie.findAll();
        
//         //Si resultado no esta vacia.....
//         if(resultado[0].id !== undefined){
//             res.send(resultado)
//         };


//     } catch (error) {
//         console.log(error);
//     };
// })

router.get('/', SeriesController.getAll);
router.get('/:id', SeriesController.getById);
router.get('/title/:title', SeriesController.getByTitle);
router.get('/genre/:genre', SeriesController.getByGenre);

module.exports = router;