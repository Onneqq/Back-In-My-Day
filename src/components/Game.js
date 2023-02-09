/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import GamePhoto from './GamePhoto'
import GameControlsPlaying from './GameControlsPlaying'
import GameScore from './GameScore'
import EndGame from './EndGame'
import imageArr from '../newimageData2'
import './CSS/Game.scss'
import GameControlsResults from './GameControlsResults'

let randImages = []
function newRandImages () {
  randImages = []
  while (randImages.length < 5) {
    randImages.push(imageArr[Math.floor(Math.random() * imageArr.length + 1)])
  }
  return randImages
}

function Game () {
  const [value, setValue] = useState(1962)
  const [gameState, setGameState] = useState({
    turn: 1,
    images: newRandImages(),
    imGoingToFixThis: 'YES IM AWARE YOU CAN CHEAT, THIS WILL BE FIXED',
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
            <EndGame gameState={gameState} setGameState={setGameState} newRandImages={newRandImages} />
            )
          : (
            <>
                <GamePhoto image={gameState.images[gameState.turn - 1]} />
                <div className='below-photo'> {gameState.turnResults
                  ? (
                    <GameControlsResults gameState={gameState} setGameState={setGameState} value={value} setValue={setValue} />
                    )
                  : (
                    <GameControlsPlaying gameState={gameState} setGameState={setGameState} value={value} setValue={setValue}/>
                    )}
                <GameScore gameState={gameState} setGameState={setGameState} />
                </div>
            </>
            )}
    </div>
  )
}

export default Game
