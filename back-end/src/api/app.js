const express = require('express');
const userRoute = require('../routes/user.routes');

const app = express();
app.use(express.json());
app.use('/user', userRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
