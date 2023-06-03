/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

const History = ({ history,currentMove, moveTo }) => {
     return (<div className="history-wrapper">
          <ul className="history">
               {history.map((_, index) => (
                    <li key={index} className="list-item">
                         <button
                         type="button"
                              key={index}
                              className={`btn-move ${currentMove === index? 'active':''}`}
                              onClick={() => moveTo(index)}>
                              {index === 0
                                   ? 'New Game Started!'
                                   : `Go to move ${index}`}
                         </button>
                    </li>
               ))}
          </ul>
          </div>
     );
};

export default History;
