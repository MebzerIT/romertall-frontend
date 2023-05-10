import { useState, useEffect } from 'react';
import ShowHistory from '../components/ShowHistory';
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
              <h3>Convertion History</h3>
              {historyData ? (
              <ul>
                  {historyData.map((historyItem, index) => (
                      <li key={index}>
                          Converted {historyItem.romertall} to {historyItem.integertall} on{' '}
                          {new Date(historyItem.opprettetKl).toLocaleString()}
                      </li>
                  ))}
              </ul>
              ) : (
                  <p>No history available</p>
              )}
          </div>
      );
    };
    
    export default HistoryContainer;