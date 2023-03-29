const { Router } = require('express');

const userController = require('../controller/user.controller');
const { verifyEmail, verifyName, verifyPassword } = require('../middlewares/user.validation');

const route = Router();

route.post(
  '/register',
  verifyEmail,
  verifyName,
  verifyPassword,
  userController.createUser,
);

route.post('/login', verifyEmail, verifyPassword, userController.loginUser);

module.exports = route;