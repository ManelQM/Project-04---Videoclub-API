const router = require('express').Router();

const {OrderSerie} = require('../models/index');


router.get('/', async (req, res) => {


    try {

        let resultado = await OrderSerie.findAll();
        
        //Si resultado no esta vacia.....
        if(resultado[0].id !== undefined){
            res.send(resultado)
        };


    } catch (error) {
        console.log(error);
    };
})

module.exports = router;