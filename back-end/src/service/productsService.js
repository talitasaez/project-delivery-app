const { Product } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll(
    { attributes: ['id', 'name', 'price', 'url_image'] },
  );
  return products;
};

module.exports = { getAll };