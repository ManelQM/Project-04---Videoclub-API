const router = require("express").Router();
const { User } = require("../models/index");
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

// UsersController.update(async (req, res) => {
//   try{
//       let data = req.body

//       let resp = await User.findByPk(
//           {
//               name: data.name,
//               email: data.email,
//               password: data.password 
//           }, 
//           {
//               where: { id: data.id}
//           })

//       res.send({
//           resp: resp,
//           message: "Se ha actualizado el registro correctamente",
//           id: data.mail
//       })

//   } catch(error){
//       res.send(error)
//   }
// })




// UsersController.update = (req, res) => {
//   const id = req.params.id;

//   if (req.User.id == id) {
//     User.update(req.body, {
//       where: { id: id },
//     })
//       .then((num) => {
//         if (num == 1) {
//           res.send({
//             message: "Updated with success.",
//           });
//         } else {
//           res.send({
//             message: "User not updated",
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: "Error chaval ",
//         });
//       });
//   } else {
//     res.send({
//       message: "Access denied",
//     });
//   }
// };

// UsersController.delete = (req, res) => {
//   const id = req.params.id;

//   if (req.user.User.rol == "Admin" || req.user.User.id == id) {
//     User.destroy({
//       where: { id: id },
//     })
//       .then((num) => {
//         if (num == 1) {
//           res.send({
//             message: "User deleted",
//           });
//         } else {
//           res.send({
//             message: "I can´t delete this user",
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: "Error",
//         });
//       });
//   } else {
//     res.send({
//       message: "Access denied",
//     });
//   }
// };
module.exports = UsersController;
