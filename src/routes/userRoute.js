const express = require('express');
const { register } = require('../controllers/users/userController');
const router = express();

router.post('/register',register)



module.exports = router