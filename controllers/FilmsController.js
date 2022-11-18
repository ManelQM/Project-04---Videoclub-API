const router = require('express').Router();
const {Film} = require('../models/index');
const FilmsController = {};    
 

// GET ALL FILMS

FilmsController.getAll = (req, res) => {

    Film.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error"
        });
      });
  }

 // GET FILMS BY ID

  FilmsController.getById = (req, res) => {
    const id = req.params.id; 
    Film.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Dude, this film with the ${id} its only in your mind.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  }
  
// GET FILMS BY TITLE 

  FilmsController.getByTitle = (req,res) => {
    const title = req.params.title
    Film.findAll( {where: {title: title}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "If you are searching for a Netflix film your are in the wrong place"
      });
    });
  }

// GET FILMS BY GENRE

  FilmsController.getByGenre = (req,res) => {
   
    const genre = req.params.genre
    console.log (genre, 'estoy en el genre')
    Film.findAll({where: {genre: genre}})
    .then(data => {  
      res.send(data);
    }) 
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "We dont have that kind of movies, no love, no drama , just have fun"
      });
    });
  }

// GET FILMS BY TOPRATED  
  
  FilmsController.getByToprated = (req, res) => {
    
    let trated = req.params.toprated
    
    Film.findAll( {where: {toprated: trated}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error no toprated films"
        });
      });
  };
  

  module.exports = FilmsController; 