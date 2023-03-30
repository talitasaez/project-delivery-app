import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/contextProducts';

function NavBar() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const history = useHistory();

  return (
    <header>
      <nav>
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

        <span data-testid="customer_products__element-navbar-user-full-name">
          { userInfo?.name }
        </span>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => setUserInfo({}) }
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
