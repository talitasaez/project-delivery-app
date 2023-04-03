const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/generate.token');
const { processError } = require('../utils/handleError');

const createUser = async ({ name, email, password, role }) => {
  try {
    const cryptoPassword = md5(password);

    let userRole = role;

    if (!role) {
      userRole = 'customer';
    }

    const user = await User.create({ name, email, password: cryptoPassword, role: userRole });

    const token = generateToken({ email, role: user.role, id: user.id });

    const userCallback = { id: user.id, name, email, role: user.role, token };

    return { message: userCallback };
  } catch (error) {
    const { type, message } = processError(error);
    return { type, message };
  }
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  try {
    const { password: userPassword } = user;
    if (md5(password) !== userPassword) return ({ type: 401, message: 'Invalid password' });
    const token = generateToken({ email: user.email, role: user.role, id: user.id });
    const userCallback = { id: user.id, name: user.name, email, role: user.role, token };
    return { message: userCallback };
  } catch (error) {
    if (!user) return ({ type: 404, message: 'User not found' });
  }
};

module.exports = { createUser, loginUser };