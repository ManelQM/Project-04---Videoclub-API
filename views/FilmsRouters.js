const router = require('express').Router();


const FilmsController = require('../controllers/FilmsController');


// router.get('/', async (req, res) => {

//     try {

//       let resultado = await Film.findAll();
        
//         if(resultado[0].id !== undefined){
//             res.send(resultado)
//         };
//     } catch (error) {
//         console.log(error);
//     };
// })

router.get('/', FilmsController.getAll);
router.get('/:id', FilmsController.getById);



module.exports = router;