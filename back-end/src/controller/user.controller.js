const userService = require('../service/user.service');

  const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const {
      type, message,
    } = await userService.createUser({ name, email, password, role });

    if (type) return res.status(type).json(message);

    return res.status(201).json(message);
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await userService.loginUser(email, password);

    if (type) return res.status(type).json(message);
    return res.status(200).json(message);
  };

  const findUsers = async (_req, res) => {
    const { message } = await userService.findUsers();

    return res.status(200).json(message);
  };

  const deleteUser = async (req, res) => {
    const { type, message } = await userService.deleteUser(req.params.id);

    if (type) return res.status(type).json(message);

    return res.status(204).json(message);
  };

module.exports = { createUser, loginUser, findUsers, deleteUser };
