import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const productsContext = createContext();

function productsProvider({ children }) {
  const getUser = localStorage.getItem('user');
  const [userInfo, setUserInfo] = useState(JSON.parse(getUser) || {});
  const [products, setProducts] = useState([]);

  const contextState = useMemo(() => ({
    userInfo,
    setUserInfo,
    products,
    setProducts,
  }), [
    userInfo,
    setUserInfo,
    products,
    setProducts,
  ]);

  return (
    <productsContext.Provider value={ contextState }>
      {children}
    </productsContext.Provider>
  );
}

productsProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default productsProvider;
export { productsContext };
