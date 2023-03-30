import PropTypes from 'prop-types';
import React from 'react';

function ProductsCard({ id, name, price, thumbnail }) {
  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price}`}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ thumbnail }
        alt="card produto"
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </span>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductsCard;