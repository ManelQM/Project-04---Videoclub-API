const router = require("express").Router();
const  {Order}  = require("../models/index");
const OrdersController = {};


 
OrdersController.getById = (req, res) => {
  const id = req.params.userId
  Order.findAll( {rented: true},{ where: { id: userId }})
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



module.exports = OrdersController;