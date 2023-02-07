import React from 'react'

function GameControlsResults ({ gameState, setGameState }) {
  const handleChange = () => {
    setGameState({ ...gameState, turnResults: false, turn: gameState.turn + 1 })
  }

  return (
        <>
        <button onClick={handleChange}>Next Image!</button>
        </>
  )
}

export default GameControlsResults
