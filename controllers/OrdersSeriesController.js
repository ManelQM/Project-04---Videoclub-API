const router = require("express").Router();
const {SerieOrder} = require('../models/index');
const OrdersSeriesController = {};

// SHOW RENTED SERIES

OrdersSeriesController.getByRented = (req, res) => {
    
    let rented = req.params.rented
   
    SerieOrder.findAll( {where: {rented: rented}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error no rented movies"
        });
      });
  };
  
//SHOW RENTED SERIES BY ONE USER

  OrdersSeriesController.getByUser= (req, res) => {
    const userid = req.params.userId;
    SerieOrder.findAll({rented:true}, {where:{userId:userid}})
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `User not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error 500",
        });
      });
  };

  //ADD NEW RENTED SERIE

  OrdersSeriesController.signUp = async (req, res) => {
    console.log(req.body);
    const OrderCreated = await SerieOrder.create({
      userId: req.body.userId,
      serieId: req.body.filmId,
      rented: req.body.rented,
      date: req.body.date
    }).catch((err) => {
      res.status(500).json(err);
    });
    res.json(OrderCreated);
  };
  

  
  module.exports = OrdersSeriesController;