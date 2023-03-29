import React, { createContext } from 'react';

const AppContext = createContext({ children });

function AppProvider() {
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
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  // children: PropTypes.node.isRequired,
};

export default AppProvider;
export { AppContext };
