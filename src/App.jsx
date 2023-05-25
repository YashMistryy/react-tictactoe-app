/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Card from './components/Card';
// import './App.css'
import Board from './components/Board';
import './styles.scss';

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
                         '-------------------------------------HURRAY! WINNER',squareS[a]
                    );
                    // updateGameState(()=>false)
                    return squareS[a];
               }
          }
     }
     return false;
};
const checkDraw = (squareS)=>{
     let length = 9
     for(let i=0;i<9;i++){
          if(squareS[i] == null || squareS[i] == false){length--}
     }
     if(length==9){return true}
     return false

}
function App() {
     // the app component renders from this line to the end
    //  console.log('-----------APP RE-RENDERED-------------');

     // declaring state of all squares below , with the setSquare(update) function
     const [squareS, setSquares] = useState(Array(9).fill(null));

     // storing current player information in a state
     const [isNext, updateplayer] = useState(false);
     const nextPlayer = isNext ? 'O':'X'

     
     const isDraw = checkDraw(squareS);
     if(isDraw){ let statusMessage = "It's a Draw !!!"}
     
     const winner = checkWinner(squareS);
     let statusMessage = winner?`Winner is ${winner}`:`Next player is ${nextPlayer}`
     
     console.log(winner)

     // let store state of game be stored like in-progress , completed
     // const [gameState,updateGameState] = useState(true)

     // console.log(squareS);

     // handelsquareclick mainly changes the state
     const handleSquareClick = (clickedPosition) => {
      
      if(squareS[clickedPosition] || winner || isDraw ){return}
      // if(!winner){
        if (!squareS[clickedPosition]) {
               // this will do the logic of handling click on our squares
               // update state using setSquares
               setSquares((currentSquare) => {
                    return currentSquare.map((squareValue, position) => {
                         if (clickedPosition === position) {
                              return isNext ? 'O' : 'X';
                         }

                         return squareValue;
                    });
               });
               // updating the player after each button click
               updateplayer((player) => !player);
          }}
    //  };

     return (
          <div className="app">
              <p className='playerInfo'>{statusMessage}</p>

               <Board squareS={squareS} handleSquareClick={handleSquareClick} />
          </div>
     );
}

export default App;
