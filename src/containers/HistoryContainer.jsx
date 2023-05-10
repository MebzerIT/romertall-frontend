import React, { useState, useEffect } from 'react';
import { fetchHistory } from '../services/api';

const HistoryContainer = () => {
    const [historyData, setHistoryData] = useState([]);
  
    useEffect(() => {
      const getHistoryData = async () => {
        const data = await fetchHistory();
        setHistoryData(data);
      };
      getHistoryData();
    }, []);

    return (
        <div>
         <ShowHistory historyData={historyData} />
        </div>
      );
    };
    
    export default HistoryContainer;