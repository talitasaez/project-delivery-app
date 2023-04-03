const jwt = require('jsonwebtoken');
const fs = require('fs');
const statusCode = require('./statusCode');

const secret = fs.readFileSync('./jwt.evaluation.key');

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return { message: payload };
  } catch (e) {
    return { type: statusCode.UNAUTHORIZED, message: 'Expired or invalid token' };
  }
};

module.exports = {
  verifyToken,
};