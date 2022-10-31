const router = require('express').Router();

const {Film} = require('../models/index');


router.get('/', async (req, res) => {


    try {

        let resultado = await Film.findAll();
        
        //Si resultado no esta vacia.....
        if(resultado[0].id !== undefined){
            res.send(resultado)
        };


    } catch (error) {
        console.log(error);
    };
})



module.exports = router;