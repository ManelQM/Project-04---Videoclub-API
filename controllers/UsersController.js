const router = require("express").Router();
const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const UsersController = {};

//CREATE NEW USER

UsersController.signUp = async (req, res) => {
  password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );
  const userCreated = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.json(userCreated);
};

//USER LOGIN

UsersController.signIn = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({
    where: { email: email },
  })
    .then((User) => {
      if (!User) {
        res.status(404).json({ message: "Not found" });
      } else {
        if (bcrypt.compareSync(password, User.password)) {
          let token = jwt.sign({ User: User }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });
          res.json({
            User: User,
            token: token,
          });
        } else {
          res
            .status(401)
            .json({ message: "Email, User or Password incorrects" });
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//GET USER BY ID (Pk)

UsersController.getById = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
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

// UPDATE USER

UsersController.update = (req, res) => {
  const id = req.params.id;

  if (req.user.User.rol == "admin" || req.user.User.id == id) {
    User.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User update",
          });
        } else {
          res.send({
            message: `Not updated ${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "User error",
        });
      });
  } else {
    res.send({
      message: `Access denied`,
    });
  }
};

// DELETE USER

UsersController.delete = (req, res) => {
  const id = req.params.id;

  if (req.user.User.rol == "admin" || req.user.User.id == id) {

    User.destroy<({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `User ${id} deleted with success`,
          });
        } else {
          res.send({
            message: `You cant delete this user ${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Error"
        });
      });
  } else {
    res.send({
      message: `You dont have access to this field`,
    });
  }
};

module.exports = UsersController;
