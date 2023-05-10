import react from 'react';

const ShowHistory = () => {

const handleClick = async  () => {
        await HistoryContainer();
      };

return (   
      <>
        <button className="osg-button osg-button--outline" onClick={handleClick}>
            Konvertering Historikk
        </button>
        <div>
            <h3>Convertion History</h3>
            <ul>
                {historyData.map((historyItem, index) => (
                    <li key={index}>
                        Converted {historyItem.romertall} to {historyItem.integertall} on{' '}
                        {new Date(historyItem.opprettetKl).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
        </>
  
    );

};

export default ShowHistory;