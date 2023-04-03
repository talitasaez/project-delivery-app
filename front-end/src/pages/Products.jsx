import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductsCard from '../components/ProductsCard';
import { ProductsContext } from '../context/ProductsProvider';
import fetchProducts from '../requests/index';

function Products() {
  const { products,
    setProducts,
    cart,
    // totalPrice,
    // setTotalPrice,
    totalValue,
    setTotalValue } = useContext(ProductsContext);
  const history = useHistory();

  const handlePrice = () => {
    // console.log('cart', cart);
    const reduce = cart
      .reduce((acc, curr) => acc + curr.price * curr.qtd, 0)
      .toFixed(2);
    // console.log('reduce', reduce);
    setTotalValue(reduce);
    return reduce;
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response);
      // console.log('response --->', response);
    };

    getProducts();
    handlePrice();
  }, [totalValue]);

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
          { totalValue }
        </span>
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
