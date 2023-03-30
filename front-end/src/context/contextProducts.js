import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

function AppProvider({ children }) {
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
    <AppContext.Provider value={ contextState }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default AppProvider;
export { AppContext };
