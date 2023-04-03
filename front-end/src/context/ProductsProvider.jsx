import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const getUser = localStorage.getItem('user');
  const [userInfo, setUserInfo] = useState(JSON.parse(getUser) || {});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const contextState = useMemo(() => ({
    userInfo,
    setUserInfo,
    products,
    setProducts,
    cart,
    setCart,
    totalValue,
    setTotalValue,
    totalPrice,
    setTotalPrice,
  }), [
    userInfo,
    setUserInfo,
    products,
    setProducts,
    cart,
    setCart,
    totalValue,
    setTotalValue,
    totalPrice,
    setTotalPrice,
  ]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
