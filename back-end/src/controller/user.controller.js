const userService = require('../service/user.service');

  const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const {
      status, message, result,
    } = await userService.createUser({ name, email, password, role });

    if (message) return res.status(status).json({ status, message });

    return res.status(status).json({ result });
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { status, result, message } = await userService.loginUser(email, password);

    if (message) return res.status(status).json({ status, message });
    return res.status(status).json({ result });
  };

module.exports = { createUser, loginUser };
