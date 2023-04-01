import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';
import { ProductsContext } from '../context/ProductsProvider';
import fetchProducts from '../requests/index';

function Products() {
  const { products, setProducts, cart } = useContext(ProductsContext);
  const history = useHistory();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response);
      console.log('response --->', response);
    };

    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
      >
        Ver carrinho: R$
        <span>
          {
            cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
              .toFixed(2).replace('.', ',')
          }
        </span>
      </button>
      {products.map((product, index) => (
        <ProductsCard
          key={ product.id }
          id={ product.id }
          index={ index }
          name={ product.name }
          price={ Number(product.price) }
          thumbnail={ product.url_image }
        />
      ))}
    </div>
  );
}

export default Products;
