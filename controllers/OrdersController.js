const router = require("express").Router();
const  {Order}  = require("../models/index");
const {User} = require("../models/index");
const OrdersController = {};


// GET ALL RENTED MOVIES

OrdersController.getByRented = (req, res) => {
    
  let rented = req.params.rented
 
  Order.findAll( {where: {rented: rented}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error no rented movies"
      });
    });
}

// GET RENTED MOVIES BY ONE USER

OrdersController.getByUser= (req, res) => {
  const userid = req.params.userId;
  Order.findAll({rented:true}, {where:{userId:userid}})
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
}

// CREATE NEW RENTED MOVIE

OrdersController.signUp = async (req, res) => {
  console.log(req.body);
  const OrderCreated = await Order.create({
    userId: req.body.userId,
    filmId: req.body.filmId,
    rented: req.body.rented,
    date: req.body.date
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.json(OrderCreated);
};

module.exports = OrdersController;