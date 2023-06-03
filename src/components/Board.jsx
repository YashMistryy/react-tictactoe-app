/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Square from './Square';
import { useState } from 'react';



// Board will recieve props from app regarding square state and onclick function
const Board = ({gamingBoard,handleSquareClick}) => {
     const squareS = gamingBoard.squareS
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