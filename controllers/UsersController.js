const router = require("express").Router();
const { User } = require("../models/index");
const UsersController = {};

UsersController.signUp = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: password,
  }).catch((err) => {
    res.status(500).json(err);
  });
};

UsersController.signIn = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  usuario
    .findOne({
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

UsersController.update = (req, res) => {
  const id = req.params.id;

  if (req.user.User.rol == "administrador" || req.user.User.id == id) {

    User.update(req.body, {
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "El usuario ha sido actualizado correctamente.",
          });
        } else {
          res.send({
            message: `No se ha podido actualizar el usuario con el id ${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Ha surgido algún error al intentar actualizar el usuario con el id " +
            id +
            ".",
        });
      });
  } else {
    res.send({
      message: `No tienes permisos para modificar el perfil indicado.`,
    });
  }
};

//BORRAMOS A USUARIO, BUSCANDO POR ID
UsersController.delete = (req, res) => {
  const id = req.params.id;

  if (req.user.User.rol == "administrador" || req.user.User.id == id) {
    // HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

    User.destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: `El usuario con id ${id} ha sido eliminado correctamente.`,
          });
        } else {
          res.send({
            message: `No se ha podido eliminar el usuario con id ${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Ha surgido algún error al intentar borrar el usuario con el id " +
            id,
        });
      });
  } else {
    res.send({
      message: `No tienes permisos para borrar el perfil indicado.`,
    });
  }
};
module.exports = UsersController;
