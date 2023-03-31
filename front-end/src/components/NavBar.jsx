import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsProvider';

function NavBar() {
  const { userInfo, setUserInfo } = useContext(ProductsContext);
  const history = useHistory();

  return (
    <header>
      <nav>
        {userInfo?.role === 'customer' && (
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
        )}

        {userInfo?.role === 'seller' && (
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
        )}

        <span data-testid="customer_products__element-navbar-user-full-name">
          {userInfo?.name}
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
