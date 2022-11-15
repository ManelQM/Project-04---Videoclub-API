const router = require('express').Router();
const UsersController = require('../controllers/UsersController');
const auth = require('../middlewares/auth.js');

// const db = require('../db/db')

router.post('/register', UsersController.signUp);
router.post('/login', UsersController.signIn);
router.get('/:id', UsersController.getById);
router.patch('/:id', auth,UsersController.update);
router.delete('/delete/:id', auth, UsersController.delete);


module.exports = router;