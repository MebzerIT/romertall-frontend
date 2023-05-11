import react from 'react';

import { useState } from 'react';
import ConvertContainer from '../containers/ConvertContainer'
import '../assets/styles/convertion.css';

const ConvertionField = ({ onConvert }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onConvert(value);
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
          placeholder="Angi romerisk tall"
          value={value}
          onChange={handleChange} />
      </div>
      <button className="osg-button osg-button--outline" onClick={handleClick}>
          Konvertere
      </button>
    </div>
  );
};

export default ConvertionField;