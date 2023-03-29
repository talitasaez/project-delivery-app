const { Router } = require('express');

const userController = require('../controller/user.controller');
const { verifyEmail, verifyName, verifyPassword } = require('../middlewares/user.validation');

const route = Router();

route.post(
  '/',
  verifyEmail,
  verifyName,
  verifyPassword,
  userController.createUser,
  );

module.exports = route;