const router = require('express').Router();
const {Serie} = require('../models/index');
const SeriesController = {};  

SeriesController.getById = (req, res) => {
    const id = req.params.id;
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

  SeriesController.getByTitle = (req,res) => {
    const title = req.params.title
    Serie.findAll( {where: {title: title}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "If you are searching for a Netflix serie your are in the wrong place"
      });
    });
  }

  SeriesController.getByGenre = (req,res) => {
   
    const genre = req.params.genre
    Serie.findAll({where: {genre: genre}})
    .then(data => {
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "We dont have that kind of serie, no love, no drama , just have fun"
      });
    });
  }
  
  SeriesController.getByToprated = (req, res) => {
    
    let trated = req.params.toprated
    
    Serie.findAll( {where: {toprated: trated}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error no toprated serie"
        });
      });
  };
module.exports = SeriesController; 