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
  console.log("----------------------RE-RENDERED----------------------------")
     
     
    
     return (
          <div className="app">
               <Board />
          </div>
     );
}

export default App;
