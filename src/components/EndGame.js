import React from 'react'
import './CSS/EndGame.scss'
function EndGame ({ gameState, setGameState, newRandImages }) {
  const handleStartAgain = () => {
    setGameState({
      turn: 1,
      images: newRandImages(),
      currentScore: 0,
      totalScore: 0,
      previousScores: [],
      turnResults: false,
      endGame: false
    })
  }

  return (
        <div className='end-game'>
            <h1>Final Score: {gameState.totalScore}</h1>
            <p>Image 1: {gameState.previousScores[0]}</p>
            <p>Image 2: {gameState.previousScores[1]}</p>
            <p>Image 3: {gameState.previousScores[2]}</p>
            <p>Image 4: {gameState.previousScores[3]}</p>
            <p>Image 5: {gameState.previousScores[4]}</p>
            <button className='button-80' onClick={handleStartAgain}>Start Again!</button>
        </div>

  )
}

export default EndGame
