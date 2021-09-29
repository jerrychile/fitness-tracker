const express = require('express');
//const userController = require();
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.signup);

module.exports = router;