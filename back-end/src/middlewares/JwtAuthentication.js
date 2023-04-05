const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/generate.token');

const authorization = (req, res, next) => {
  const { Authorization } = req.headers;

  if (!Authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verify = jwt.verify(Authorization, SECRET);
    req.user = verify;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authorization,
};
