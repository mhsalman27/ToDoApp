const express = require('express');
const { testingController, homeController } = require('../controllers/testController');

// config 
const router = express.Router();
//routes

router.get('/test' , testingController);
router.get('/home' , homeController);

module.exports = router;