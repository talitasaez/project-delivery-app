import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { ProductsContext } from '../context/ProductsProvider';

function NavBar() {
  // const { userInfo } = useContext(ProductsContext);
  const history = useHistory();
  const [userName, setUserName] = useState('');

  const handleName = () => {
    const nameStorage = JSON.parse(localStorage.getItem('user'));
    const { name } = nameStorage;
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    history.push('/login');
  };

  useEffect(() => {
    handleName();
  }, []);

  return (
    <header>
      <nav>
        {/* {userInfo?.role === 'customer' && ( */}
        <div>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => history.push('/customer/products') }
          >
            PRODUTOS
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => history.push('/customer/orders') }
          >
            MEUS PEDIDOS
          </button>
        </div>
        {/* )} */}

        {/* {userInfo?.role === 'seller' && (
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
              onClick={ () => history.push('/seller/orders') }
            >
              MEUS PEDIDOS
            </button>
          </div>
        )}

        {userInfo?.role === 'administrator' && (
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
              onClick={ () => history.push('/seller/orders') }
            >
              GERENCIAR USUÁRIOS
            </button>
          </div>
        )} */}

        <span data-testid="customer_products__element-navbar-user-full-name">
          { userName }
        </span>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
