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
            {historyData ? (
            <table class="osg-table">
                <thead class="osg-table__head">
                <tr class="osg-table__row">
                    <th scope="col" class="osg-table__heading">Romertall</th>
                    <th scope="col" class="osg-table__heading">Heltall</th>
                    <th scope="col" class="osg-table__heading">Konverteringsdato</th>
                </tr>
                </thead>
                <tbody class="osg-table__body">
                {historyData.map((historyItem, index) => (
                    <tr key={index} class="osg-table__row">
                    <td class="osg-table__cell">{historyItem.romertall}</td>
                    <td class="osg-table__cell">{historyItem.integertall}</td>
                    <td class="osg-table__cell">{new Date(historyItem.opprettetKl).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            ) : (
            <p>No history available</p>
            )}
      </div>
      );
    };
    
    export default HistoryContainer;