import react from 'react';
import { useState } from 'react';
import HistoryContainer from "../containers/HistoryContainer";

const ShowHistory = () => {

    const [showHistory, setShowHistory] = useState(false);

    const handleClickHistory = () => {
             setShowHistory(prevShowHistory => !prevShowHistory);
        };

  return (   
      <>
        <button className="osg-button osg-button--outline history" onClick={handleClickHistory}>
            Konvertering Historikk
        </button>
        {showHistory && <HistoryContainer />}     
     </>
   );
};

export default ShowHistory;