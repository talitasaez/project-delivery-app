const userService = require('../service/user.service');

  const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const {
      status, message, result,
    } = await userService.createUser({ name, email, password, role });

    if (message) {
      return res.status(status).json({ status, message });
    }

    return res.status(status).json({ result });
  };

module.exports = { createUser };
