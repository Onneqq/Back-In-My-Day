import React from 'react'

function GameControlsResults ({ gameState, setGameState }) {
  const handleChange = () => {
    setGameState({ ...gameState, turnResults: false })
  }

  return (
        <>
        <button onClick={handleChange}>Next Image!</button>
        </>
  )
}

export default GameControlsResults
