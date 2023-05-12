import react from 'react';

import { useState } from 'react';
import ConvertContainer from '../containers/ConvertContainer'
import '../assets/styles/convertion.css';

const ConvertionField = ({ onConvert }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    //onConvert(value);
    const romanNumeralRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (value && romanNumeralRegex.test(value)) {
      onConvert(value);
    } else {
      alert('Vennligst skriv inn et gyldig romertall');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='inputField'>
      <div className="osg-input">
        <input
          className="osg-input__input"
          type="text"
          autoComplete="on"
          aria-label="Label text"
          placeholder="Romerisk tall"
          value={value}
          onChange={handleChange} />
      </div>
      <button className="osg-button osg-button--outline convert" onClick={handleClick}>
          Konvertere
      </button>
    </div>
  );
};

export default ConvertionField;