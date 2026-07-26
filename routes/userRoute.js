const express = require('express');
const { registerController, loginController } = require('../controllers/userController');


// config 

const router = express.Router();
// Register User
router.post('/register' , registerController);

// Login user 
router.post('/login' , loginController)

module.exports = router;