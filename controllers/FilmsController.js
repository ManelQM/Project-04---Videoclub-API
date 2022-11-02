const router = require('express').Router();
const {Film} = require('../models/index');
const FilmsController = {}; 


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

FilmsController.getAll = (req, res) => {

    Film.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };

  FilmsController.getById = (req, res) => {
    const id = req.params.id;
  
    Film.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Dude, this film with the id ${id} its only in your mind.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  };
  
  module.exports = FilmsController;