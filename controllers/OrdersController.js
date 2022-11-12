const router = require("express").Router();
const  {Order}  = require("../models/index");
const { Film } = require('../models/index');
const { User } = require('../models/index');
var FilmModel  = require('../models').film; 

var userModel  = require('../models').user;

const OrdersController = {};
 
OrdersController.getByuserId = (req, res) => {
  const userid = req.params.userId;
  Order.findOne({rented:true}, {where:{userid:userid}})
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
        message: "Error",
      });
    });
};

// OrdersController.getById = (req, res) => {
//   const id = req.params.id
//   Order.findOne({rented: true},{where:{id:id}})
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         console.log(res),
//         res.status(404).send({
//           message: `Dude, this serie with the ${id} its only in your mind.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error"
//       });
//     });
// };



module.exports = OrdersController;