const { Router } = require('express');
const productsController = require('../controller/productsController');

const route = Router();

route.get('/', productsController.getAll);

module.exports = route;