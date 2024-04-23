import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './winning-combinations.js'

function deriveActiveplayer(gameTurns){
  let currentPlayer='X';
  if(gameTurns.length>0 && gameTurns[0].player==='X'){
    currentPlayer='O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns]=useState([]);

  const activePlayer = deriveActiveplayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns) =>{
      let currentPlayer = deriveActiveplayer(prevTurns)
      const updatedTurns = [
        {square:{row:rowIndex, col:colIndex}, player:currentPlayer},
         ...prevTurns]

      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player 1"} symbol={"X"} activePlayer={activePlayer==='X'}/>
          <Player initialName={"Player 2"} symbol={"O"} activePlayer={activePlayer==='O'}/>
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log 
        turns={gameTurns}
      />
    </main>
  );
}
export default App;
