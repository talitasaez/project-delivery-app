import { useContext } from 'react';
import PropTypes from 'prop-types';
import { formContext } from '../context/FormProvider';

function GenericInput({ name, type, validation, keyOfInput, dataTestId }) {
  const { inputsValue, setInputsValue } = useContext(formContext);

  const showMessage = () => {
    const { value } = inputsValue[keyOfInput];
    if (value.length) {
      return inputsValue[keyOfInput].isValid ? 'Campo válido'
        : 'Campo inválido';
    }
  };

  const onInputChange = (value) => {
    setInputsValue((prevState) => (
      {
        ...prevState,
        [keyOfInput]: {
          ...prevState[keyOfInput], value,
        },
      }
    ));
  };

  return (
    <section>
      <label htmlFor="genericInput">
        { name }
        <input
          type={ type }
          value={ inputsValue[keyOfInput].value }
          onChange={ ({ target }) => {
            validation(target.value, setInputsValue);
            onInputChange(target.value);
          } }
          data-testid={ dataTestId }
        />
      </label>
      <span>{ showMessage() }</span>
    </section>
  );
}

GenericInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.func,
  keyOfInput: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;

export default GenericInput;
