const router = require("express").Router();
const  {Order}  = require("../models/index");
const OrdersController = {};

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
};

OrdersController.getByUserId = (req, res) => {
  const userid = req.params.userId;
  Order.findOne({rented:true}, {where:{userId:userid}})
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