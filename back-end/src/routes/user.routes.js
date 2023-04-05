const { Router } = require('express');

const userController = require('../controller/user.controller');
const { tokenAuthorization } = require('../middlewares/admin.JwtAuthentication');
const { authorization } = require('../middlewares/JwtAuthentication');
const { verifyEmail, verifyName, verifyPassword } = require('../middlewares/user.validation');

const route = Router();

route.post(
  '/register',
  tokenAuthorization,
  verifyEmail,
  verifyName,
  verifyPassword,
  userController.createUser,
);

route.post('/login', verifyEmail, verifyPassword, userController.loginUser);
route.get('/all', authorization, userController.findUsers);
route.delete('/:id', authorization, userController.deleteUser);

module.exports = route;