import React, { useMemo, useState, createContext } from 'react';
import PropTypes from 'prop-types';

const AdminContext = createContext();

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [user, setUser] = useState([]);
  const [btnDisable, setbtnDisable] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const data = useMemo(
    () => ({
      name,
      role,
      email,
      password,
      user,
      btnDisable,
      isLogged,
      setName,
      setRole,
      setEmail,
      setPassword,
      setUser,
      setIsLogged,
      setbtnDisable,

    }),
    [
      email,
      password,
      user,
      name,
      role,
      isLogged,
      btnDisable,
    ],
  );
  return (
    <AdminContext.Provider value={ data }>
      { children }
    </AdminContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default AdminContext;
