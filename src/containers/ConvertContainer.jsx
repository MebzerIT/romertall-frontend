
import React, { useState } from 'react';
import ConvertionField from '../components/ConvertionField';
import { fetchConvertion } from '../services/api';

const ConvertContainer = () => {

  const [result, setResult] = useState(null);

  const handleConvert = async (value) => {
    const result = await fetchConvertion(`${value}`);
    setResult(result);
  };

  return (
    <div>
      <h1>Romerisk tall konvertering</h1>
      <ConvertionField onConvert={handleConvert} />
      <hr class="osg-divider osg-divider--blue-dark"></hr>

      <div class="osg-landscape-card osg-landscape-card--no-image">
        <a class="osg-landscape-card__link" href="javascript:void(0)">           
            <div class="osg-landscape-card__content">
            
              <h3 class="osg-landscape-card__heading">Resultat: {result} </h3>
            
            </div>
        </a>
      </div>
    </div>
  );
};

export default ConvertContainer; 