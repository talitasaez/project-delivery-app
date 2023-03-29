const express = require('express');
const cors = require('cors');
const userRoute = require('../routes/user.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
