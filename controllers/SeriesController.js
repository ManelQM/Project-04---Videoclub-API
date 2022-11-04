const router = require('express').Router();
const {Serie} = require('../models/index');
const SeriesController = {};  

SeriesController.getById = (req, res) => {
    const id = req.params.id;
  console.log 
    Serie.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Dude, this serie with the ${id} its only in your mind.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  };
  


module.exports = router; 