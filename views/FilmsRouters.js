const router = require('express').Router();

const {Film} = require('../models/index');


router.get('/', async (req, res) => {

    try {

      let resultado = await Film.findOne();
        
        if(resultado[0].id !== undefined){
            res.send(resultado)
        };
    } catch (error) {
        console.log(error);
    };
})


router.get('/films/:id', (req, res) => {
    let filmid = req.params.id
    Film.findByPk(filmid)
    .then(resp => {
        res.send(resp)
    })
})


module.exports = router;