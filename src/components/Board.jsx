/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Square from './Square';
import { useState } from 'react';

const Board = () => {
     // declaring state of all squares below , with the setSquare(update) function
     const [squareS, setSquares] = useState(Array(9).fill(null))
     console.log(squareS)
     const handleSquareClick = (clickedPosition) =>{
          // this will do the logic of handling click on our squares
          // using setSquares
          setSquares((currentSquare)=>{
               return currentSquare.map((squareValue,position)=>{
                    if(clickedPosition === position){
                         return 'X'
                    }
                    return squareValue
               })
          })

     }
     const renderSquare = (position)=>{
          return(<Square
                value={squareS[position]}
                onclick={()=>handleSquareClick(position)} />)
     }

     return (
          <div className="board">
               <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}

                    {/* instead of writing Square tag multiple times we just created a function renderSquare to do the Html rendering each time with position value */}
                    {/* <Square value={squareS[0]} />
                    <Square value={squareS[1]} />
                    <Square value={squareS[2]} /> */}
               </div>
               <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
               </div>
               <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
               </div>
          </div>
     );
};


export default Board