/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import History from './components/History';
// import './App.css'
import Board from './components/Board';
// import './styles.scss';
import './styles.scss'
import { Button } from 'bootstrap';

const checkWinner = (squareS) => {
     const winningpatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
     ];
     // checking if current state is the winning state or not
     for (let i = 0; i < winningpatterns.length; i++) {
          const [a, b, c] = winningpatterns[i];
          if (squareS[a] && squareS[b] && squareS[c]) {
               if (squareS[a] === squareS[b] && squareS[b] === squareS[c]) {
                    console.log(
                         '-------------------------------------HURRAY! WINNER',
                         squareS[a]
                    );
                    // updateGameState(()=>false)
                    return {winner:squareS[a],
                            winningSquare:winningpatterns[i]};
                    // return true
               }
          }
     }
     return {winner:false,winningSquare:[]}
};

const checkDraw = (squareS) => {
     let secondArr = squareS.filter((val) => {
          // console.log(val)
          if (val) {
               return 1;
          }
     });
     if (secondArr.length == 9) {
          return true;
     }
     return false;
};
// const NEW_GAME
function App() {
     // the app component renders from this line to the end
     /* previously used squareState to store the state and isNext to store the next player state
        now using history and current player state for the purpose
     // declaring state of all squares below , with the setSquare(update) function
     let [squareS, setSquares] = useState(Array(9).fill(null));
     // storing current player information in a state
     const [isNext, updateplayer] = useState(false);
     */
     const [history, setHistory] = useState([{ squareS: Array(9).fill(null), isNext: false }]);
     const [currentMove, setCurrentMove] = useState(0);

     console.log(currentMove);
     console.log(history[currentMove]);
     // console.log(history[currentMove]);
     // using gamingBoard which takes the value of current move and current sqaure state
     const gamingBoard = history[currentMove];
     // console.log(gamingBoard);
     const nextPlayer = gamingBoard.isNext ? 'O' : 'X';
     // const nextPlayer = 'x'

     const {winner,winningSquare} = checkWinner(gamingBoard.squareS);

     const isDraw = checkDraw(gamingBoard.squareS);

     let statusMessage = winner
          ? `Winner is ${winner}`
          : `Next player is ${nextPlayer}`;
     if (isDraw && !winner) {
          statusMessage = "It's a Draw !!!";
     }

     // let store state of game be stored like in-progress , completed
     const [gameState, updateGameState] = useState(true);

     // handelsquareclick mainly changes the state of squares
     const handleSquareClick = (clickedPosition) => {
          if (gamingBoard.squareS[clickedPosition] || winner || isDraw) {
               return;
          }

          setHistory((currentHistory) => {
               // to know if be are traversing back in history and changing the past
               const isTraversing = currentMove + 1 !== currentHistory.length;

               // save the last state
               const lastGamingboardState = isTraversing
                    ? currentHistory[currentMove]
                    : history[history.length - 1];
               // lets find the next state (state to be)
               const nextSquareState = lastGamingboardState.squareS.map(
                    (squareValue, position) => {
                         if (clickedPosition === position) {
                              return lastGamingboardState.isNext ? 'X' : 'O';
                         }
                         return squareValue;
                    }
               );
               const base = isTraversing
                    ? currentHistory.slice(0, currentHistory.indexOf(lastGamingboardState) + 1 )
                    : currentHistory;
               // console.log(currentHistory)
               // we have to return the updated state to the history-setHistory
               return base.concat({
                    squareS: nextSquareState,
                    isNext: !lastGamingboardState.isNext
               });
          });
          //    if (!gamingBoard.squareS[clickedPosition]) {
          /* code changed due to better approach was found using history state
               // this will do the logic of handling click on our squares
               // update state using setSquares
               setSquares((currentSquare) => {
                    return currentSquare.map((squareValue, position) => {
                         if (clickedPosition === position) {
                              return gamingBoard.isNext ? 'O' : 'X';
                         }
                         return squareValue;
                    });
               });
               // updating the player after each button click
               updateplayer((player) => !player);
               */
          // }
          // return;
          setCurrentMove((move) => move + 1);
     };

     const resetGame = () => {
          setCurrentMove(0);
          setHistory([{ squareS: Array(9).fill(null), isNext: false }]);
     };

     const moveTo = (pos) => {
          setCurrentMove(pos);
     };

     return (
          
          <div className="app">
               <h1>TIC <span className='text-orange'>TAC</span> TOE</h1>
               <p className="playerInfo">{statusMessage}</p>
               <Board
                    gamingBoard={gamingBoard}
                    handleSquareClick={handleSquareClick}
                    winningSquare={winningSquare}
               />
               <button className="btn-reset" onClick={resetGame}>
                    RESET
               </button>

               <History
                    history={history}
                    moveTo={moveTo}
                    currentMove={currentMove}
               />
          </div>
     );
}

export default App;
