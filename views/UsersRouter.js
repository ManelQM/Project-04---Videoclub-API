
const router = require('express').Router();

const UsersController = require('../controllers/UsersController');
const { User } = require('../models/index');

// const db = require('../db/db')





router.post('/newUser', UsersController.signUp);
router.get('/User/:User', UsersController.findOne);
module.exports = router;