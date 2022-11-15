const router = require('express').Router();
const {Serie} = require('../models/index');
const SeriesController = {};  

//GET SERIE BY ID

SeriesController.getById = (req, res) => {
    const id = req.params.id;
    Serie.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No serie ${id} `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  }

  //GET SERIE BY TITLE

  SeriesController.getByTitle = (req,res) => {
    const title = req.params.title
    Serie.findAll( {where: {title: title}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "No matches by title"
      });
    });
  }

//GET BY GENRE

  SeriesController.getByGenre = (req,res) => {
   
    const genre = req.params.genre
    Serie.findAll({where: {genre: genre}})
    .then(data => {
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "No matches by genre"
      });
    });
  }

//GET BY TOPRATED

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
  }


module.exports = SeriesController; 