const { Router } = require('express');
const productsController = require('../controllers/productsController');

const route = Router();

route.get('/', productsController.getAll);

module.exports = route;