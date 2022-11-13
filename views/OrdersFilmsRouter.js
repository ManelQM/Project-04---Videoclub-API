const router = require('express').Router();
const OrdersController = require('../controllers/OrdersController');

  
router.get('/rented/:rented', OrdersController.getByRented);
router.get('/userid/:userid', OrdersController.getByUser);
router.post('/neworder', OrdersController.signUp);
module.exports = router;



// const Usuario = require('../models/usuario')


// router.get('/', (req, res) => {
//     OrderFilm.findAll({
//         where: { userId: 'userId' },
    
//     })
//     .then(resp => {
//         res.send(resp)
//     })
// })

// router.get('/', async (req, res) => {


//     try {

//         let resultado = await OrderFilm.findAll();
        
//         //Si resultado no esta vacia.....
//         if(resultado[0].id !== undefined){
//             res.send(resultado)
//         };


//     } catch (error) {
//         console.log(error);
//     };
// })

