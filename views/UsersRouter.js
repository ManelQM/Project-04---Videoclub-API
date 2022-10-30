
const router = require('express').Router();

const { User } = require('../models/index');

// const db = require('../db/db')

//CARGO CON MI CRUD

// CRUD READ
router.get('/', async (req, res) => {


    // User.findAll(
    //     )
    // .then(resp => {
    //     res.send(resp)
    // })
    // .catch(error => res.send(error));


    try {

        let resultado = await User.findAll();
        
        //Si resultado no esta vacia.....
        if(resultado[0].id !== undefined){
            res.send(resultado)
        };


    } catch (error) {
        console.log(error);
    };
})





module.exports = router;