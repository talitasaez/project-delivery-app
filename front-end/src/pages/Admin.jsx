import React, { useContext, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import AdminContext from '../context/AdminProvider';

function Admin() {
  const { name, password, email, role, setEmail, setPassword, setName, setRole,
    btnDisable, setBtnDisable } = useContext(AdminContext);

  const handleDisable = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    const nameL = 12;
    const passL = 6;
    const nameComplete = name.length >= nameL;
    const emailOk = regex.test(email);
    const passwordOk = password.length >= passL;
    const checkData = !(emailOk && passwordOk && nameComplete);
    setBtnDisable(checkData);
  };

  const handleName = ({ e }) => {
    setName(e.value);
    handleDisable();
  };

  const handleEmail = ({ e }) => {
    setEmail(e.value);
    handleDisable();
  };

  const handlePassword = ({ e }) => {
    setPassword(e.value);
    handleDisable();
  };

  const handleRole = ({ e }) => {
    setRole(e.value);
    handleDisable();
  };

  useEffect(() => {
    handleDisable();
  });

  // try {
  //   const { isAdmin } = JSON.parse(localStorage.getItem('user'));
  //   if (!isLogged || isAdmin !== 'admin') {
  //     return <Redirect to="/login" />;
  //   }
  // } catch (error) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div>
      <header>
        <h3 data-testid="customer_products__element-navbar-link-orders">
          Gereciar Usuário
        </h3>
        <h3 data-testid="customer_products__element-navbar-user-full-name">
          Admin
        </h3>
        <button type="button" data-testid="customer_products__element-navbar-link-logout">
          Sair
        </button>
      </header>

      <h1>Cadastror novo Usuário</h1>

      <form>
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            id="name"
            value={ name }
            data-testid="admin_manage__input-name"
            onChange={ handleName }
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="admin_manage__input-email"
            onChange={ handleEmail }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="admin_manage__input-password"
            onChange={ handlePassword }
          />
        </label>

        <label htmlFor="role">
          Tipo:
          <select
            type="role"
            name="role"
            value={ role }
            data-testid="admin_manage__select-role"
            onChange={ handleRole }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ btnDisable }
        >
          CADASTRAR
        </button>
      </form>

      <h1>Lista de usuários</h1>

      <table>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
        <tr>
          <td data-testid="admin_manage__element-user-table-item-number">
            item-number
          </td>
          <td data-testid="admin_manage__input-email">
            input-email
          </td>
          <td data-testid="admin_manage__element-user-table-email">
            user-table-email
          </td>
          <td data-testid="admin_manage__element-user-table-role-<index>">
            table-role
          </td>
        </tr>
      </table>

    </div>

  );
}

export default Admin;
