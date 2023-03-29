const express = require('express');
const productsRoutes = require('../routes/productsRoutes');

const app = express();
app.use(express.json());

app.use('/products', productsRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
