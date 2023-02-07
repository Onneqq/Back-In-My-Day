/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import GamePhoto from './GamePhoto'
import GameControlsPlaying from './GameControlsPlaying'
import GameScore from './GameScore'
import EndGame from './EndGame'
import imageArr from '../newimageData2'
import './CSS/Game.scss'
import GameControlsResults from './GameControlsResults'

const randImages = []

while (randImages.length < 5) {
  randImages.push(imageArr[Math.floor(Math.random() * imageArr.length + 1)])
}

function Game () {
  const [gameState, setGameState] = useState({
    turn: 1,
    images: randImages,
    currentScore: 0,
    totalScore: 0,
    previousScores: [],
    turnResults: false,
    endGame: false
  })

  return (
    <div className="game">
        {gameState.endGame
          ? (
            <EndGame gameState={gameState} setGameState={setGameState} />
            )
          : (
            <>
                <GamePhoto image={randImages[gameState.turn - 1]} />
                {gameState.turnResults
                  ? (
                    <GameControlsResults gameState={gameState} setGameState={setGameState} />
                    )
                  : (
                    <GameControlsPlaying gameState={gameState} setGameState={setGameState} />
                    )}
                <GameScore gameState={gameState} setGameState={setGameState} />
            </>
            )}
    </div>
  )
}

export default Game

// return (
//   <div className="game">
//       <GamePhoto image={randImages[gameState.turn - 1]} />
//       {gameState.turnResults
//         ? <GameControlsResults
//       gameState={gameState}
//       setGameState={setGameState}
//       />
//         : <GameControlsPlaying
//       gameState={gameState}
//       setGameState={setGameState}
//       />
//     }

//       <GameScore
//       gameState={gameState}
//       setGameState={setGameState}
//       />

//   </div>
// )
