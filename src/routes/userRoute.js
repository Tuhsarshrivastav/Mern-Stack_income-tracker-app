const express = require('express');
const { register } = require('../controllers/users/userController');
const router = express();

router.get('/register',register)



module.exports = router