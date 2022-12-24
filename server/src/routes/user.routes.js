const router = require('express').Router();
const { login, register, getUserById } = require('../controllers/user.controller');

router.post('/login', login);
router.post('/register', register);
router.get('/:id', getUserById);

module.exports = router;