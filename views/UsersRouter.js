
const router = require('express').Router();

const UsersController = require('../controllers/UsersController');

// const db = require('../db/db')

router.post('/newuser', UsersController.signUp);
router.post('/login', UsersController.signIn);
router.get('/:id', UsersController.getById);
// router.put('/:update', UsersController.update);

module.exports = router;