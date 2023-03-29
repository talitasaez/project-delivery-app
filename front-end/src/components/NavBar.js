import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/contextProducts';

function NavBar() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   setUserInfo({});
  // };

  return (
    <header>
      <nav>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          PRODUTOS
        </button>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigate('/customer/orders') }
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
