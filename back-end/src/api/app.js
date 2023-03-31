const cors = require('cors');
const express = require('express');
const productsRoutes = require('../routes/productsRoutes');

const userRoute = require('../routes/user.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/products', productsRoutes);
app.use('/images', express.static(`${__dirname}/images`));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
