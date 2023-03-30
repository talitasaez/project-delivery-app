import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';
import { productsContext } from '../context/contextProducts';
import fetchProducts from '../requests/index';

function Products() {
  const { products, setProducts } = useContext(productsContext);
  const history = useHistory();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response);
      console.log('response --->', response);
    };

    getProducts();
  }, [setProducts]);

  return (
    <div>
      <NavBar />
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
      >
        Ver carrinho: R$
      </button>
      {products.map((product, index) => (
        <ProductsCard
          key={ product.id }
          id={ product.id }
          index={ index }
          name={ product.name }
          price={ product.price }
          thumbnail={ product.url_image }
        />
      ))}
    </div>
  );
}

export default Products;
