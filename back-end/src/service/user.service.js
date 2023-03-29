const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/generate.token');

const createUser = async ({ name, email, password, role }) => {
  const emailExists = await User.findOne({ where: { email } });
  const nameExists = await User.findOne({ where: { name } });

  if (emailExists || nameExists) return ({ status: 409, message: 'User already registered' });

  const cryptoPassword = md5(password);

  let type = role;

  if (!role) {
    type = 'customer';
  }

  const user = await User.create({ name, email, password: cryptoPassword, role: type });

  const token = generateToken({ email, role: user.role, id: user.id });

  const result = { id: user.id, name, email, role: user.role, token };

  return { status: 201, result };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return ({ status: 404, message: 'User not found' });
  const { password: userPassword } = user;
  if (md5(password) !== userPassword) return ({ status: 401, message: 'Invalid password' });
  const token = generateToken({ email: user.email, role: user.role, id: user.id });
  const result = { id: user.id, name: user.name, email, role: user.role, token };
  return { status: 201, result };
};

module.exports = { createUser, loginUser };