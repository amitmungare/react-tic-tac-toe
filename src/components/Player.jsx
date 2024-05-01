import React, { useState } from "react";

const Player = ({ initialName, symbol, activePlayer, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing(isEditing => !isEditing);
    if(isEditing)onChangeName(symbol, playerName)
  }

  function handleChange(event){
    setPlayerName(event.target.value)
  }

  return (
    <li className={activePlayer?'active':''}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange}></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
