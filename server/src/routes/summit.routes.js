const { getAllConfrences, getConfrenceById, registerToConfrence, deleteRegistration } = require('../controllers/summit.controller');

const router = require('express').Router();

router.get('/', getAllConfrences);
router.get('/getConfrenceById/:id', getConfrenceById);
router.post('/:id', registerToConfrence);
router.post('/deleteRegistration/:id', deleteRegistration);

module.exports = router;