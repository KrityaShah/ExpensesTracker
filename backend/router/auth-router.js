const express = require('express')
const router = express.Router();
const authControllers = require('../controller/auth-controllers')
const signupSchema = require('../validator/auth-validator');
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/auth-middleware');

router.route('/').get(authControllers.home)
router.route('/register').post(validate(signupSchema),authControllers.register)
router.route('/login').post(authControllers.login)
router.route('/user').get(authMiddleware, authControllers.user);
router.route('/createExpenses').post(authMiddleware, authControllers.createExpenses)
router.route('/getExpenses').get(authMiddleware, authControllers.getExpenses);
router.route('/getExpenses/delete/:id').delete(authMiddleware, authControllers.deleteExpensesById);
module.exports = router;