const express = require('express')
const router = express.Router();
const authControllers = require('../controller/auth-controllers')
const signupSchema = require('../validator/auth-validator');
const validate = require('../middleware/validate-middleware');


router.route('/').get(authControllers.home)
router.route('/register').post(validate(signupSchema),authControllers.register)
router.route('/login').post(authControllers.login)

module.exports = router;