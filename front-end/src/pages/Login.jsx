import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePasswordInput,
} from '../utils/inputsValidation';

import { formContext } from '../context/FormProvider';

function Login() {
  const { inputsValue: { email, password }, setUser } = useContext(formContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  const postEndPointLogin = async () => {
    axios.post('http://localhost:3001/user/login', {
      email: email.value, password: password.value,
    }).then(({ data }) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.result));
      setUser(data.result);
      switch (data.result.role) {
      case 'administrator': history.push('/admin/manage'); break;
      case 'seller': history.push('/seller/orders'); break;
      default: history.push('/customer/products'); break;
      }
    }).catch(({ response: { data: { message } } }) => setErrorMessage(message));
  };

  const redirectToResgister = () => {
    history.push('/register');
  };

  return (
    <section>
      <form onSubmit={ onSubmit }>
        <GenericInput
          name="Email"
          keyOfInput="email"
          type="email"
          validation={ validateEmailInput }
          dataTestId="common_login__input-email"
        />
        <GenericInput
          name="Senha"
          keyOfInput="password"
          type="password"
          validation={ validatePasswordInput }
          dataTestId="common_login__input-password"
        />
        <button
          disabled={ !(email.isValid && password.isValid) }
          type="submit"
          onClick={ postEndPointLogin }
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          type="submit"
          onClick={ redirectToResgister }
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      <span data-testid="common_login__element-invalid-email">{errorMessage}</span>
    </section>
  );
}

export default Login;
