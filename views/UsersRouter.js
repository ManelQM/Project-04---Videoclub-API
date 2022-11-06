
const router = require('express').Router();

const UsersController = require('../controllers/UsersController');

// const db = require('../db/db')





router.post('/newUser', UsersController.signUp);
router.get('/:id', UsersController.getById);
module.exports = router;