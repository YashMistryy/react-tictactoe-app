/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Card from './components/Card';
// import './App.css'
import Board from './components/Board';
import './styles.scss';


function App() {
     const [counter, setCounter] = useState(1)
     console.log("----------------------RE-RENDERED----------------------------")
     
     const onbtnclick = ()=>{
      setCounter((counterState)=>{ return counterState+1})
     }


     return (
          <div className="app">
               <Board />
               <button onClick={()=>onbtnclick()}>click me please</button>
               <div>{counter}</div>
          </div>
     );
}

export default App;
