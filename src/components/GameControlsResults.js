import React from 'react'

function GameControlsResults ({ gameState, setGameState }) {
  const handleChange = () => {
    gameState.turn === 5 ? setGameState({ ...gameState, endGame: true }) : setGameState({ ...gameState, turnResults: false, turn: gameState.turn + 1 })
  }

  return (
        <>
        <button onClick={handleChange}>Next Image!</button>
        </>
  )
}

export default GameControlsResults
