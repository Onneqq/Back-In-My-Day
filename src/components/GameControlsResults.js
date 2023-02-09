import React from 'react'
import './CSS/GameControls.scss'

function GameControlsResults ({ gameState, setGameState, value, setValue }) {
  const handleChange = () => {
    gameState.turn === 5 ? setGameState({ ...gameState, endGame: true }) : setGameState({ ...gameState, turnResults: false, turn: gameState.turn + 1 })
  }

  return (
        <>
        <button className='button-80' onClick={handleChange}>Next Image!</button>
        <h3>Your guess: {value}</h3>
        <h3>Correct Answer: {gameState.images[gameState.turn - 1][2]}</h3>
        </>
  )
}

export default GameControlsResults
