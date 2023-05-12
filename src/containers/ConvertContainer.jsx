
import React, { useState } from 'react';
import ConvertionField from '../components/ConvertionField';
import { fetchConvertion } from '../services/api';
import '../assets/styles/osg.css';
import '../assets/styles/convertContainer.css';

const ConvertContainer = () => {

  const [result, setResult] = useState(null);

  const handleConvert = async (value) => {
    const result = await fetchConvertion(`${value}`);
    setResult(result);
  };

  return (
    <div>
      <ConvertionField onConvert={handleConvert} />
      <hr class="osg-divider osg-divider--blue-dark"></hr>
      <div class="osg-landscape-card osg-landscape-card--no-image">          
            <div class="osg-landscape-card__content">
              <h3 class="osg-landscape-card__heading">Resultat: {result} </h3>
            </div>
      </div>
    </div>
  );
};

export default ConvertContainer; 