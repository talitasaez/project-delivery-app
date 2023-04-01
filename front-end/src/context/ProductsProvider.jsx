import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const getUser = localStorage.getItem('user');
  const getCart = localStorage.getItem('cart');
  const [userInfo, setUserInfo] = useState(JSON.parse(getUser) || {});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(getCart) || []);

  const contextState = useMemo(() => ({
    userInfo,
    setUserInfo,
    products,
    setProducts,
    cart,
    setCart,
  }), [
    userInfo,
    setUserInfo,
    products,
    setProducts,
    cart,
    setCart,
  ]);

  return (
    <ProductsContext.Provider value={ contextState }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default ProductsProvider;
export { ProductsContext };
