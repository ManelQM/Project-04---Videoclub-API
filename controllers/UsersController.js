const router = require("express").Router();
const {User} = require("../models/index");
const UsersController = {};

UsersController.signUp = async (req, res) => {
  console.log(req.body);
  const userCreated = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).catch((err) => {
    res.status(500).json(err);
  });
  res.json(userCreated);
};

UsersController.signIn = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({
    where: { email: email },
  })
    .then((User) => {
      if (!User) {
        res.status(404).json({ msg: "Not found" });
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
          res.status(401).json({ msg: "Email, User or Password incorrects" });
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

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



module.exports = UsersController;
