const router = require('express').Router();
const {User} = require('../models/index');
const UsersController = {}; 


UsersController.signUp = (req, res) => {   

            User.create({
                name: req.body.name,
                email: req.body.email,
                password: password,
            })
            .catch(err => {
                res.status(500).json(err);
            });
     }

UsersController.getById = (req, res) => {
            const id = req.params.id; 
            User.findByPk(id)
              .then(data => {
                if (data) {
                  res.send(data);
                } else {
                  res.status(404).send({
                    message: `User not found`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Error"
                });
              });
          };
    


module.exports = UsersController;