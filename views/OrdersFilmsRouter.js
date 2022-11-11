const router = require('express').Router();

const OrdersController = require('../controllers/OrdersController');
// const OrdersController = require('../controllers/OrdersController');
// const OrderFilm = require('../models/order');

router.get('/:id', OrdersController.getById);
module.exports = router;

// const express = require('express')
// const router = express.Router()

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

// router.post('/neworder', OrdersController.signUp); //NEW ORDER
// router.get('/user',OrdersController.getByUserOrder)
// router.get('/:id', OrdersController.getById);
