/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import GamePhoto from './GamePhoto'
import GameControls from './GameControls'
import imageArr from '../newimageData2'
import './CSS/Game.scss'

const randImages = []

while (randImages.length < 5) {
  console.log(Math.floor(Math.random() * imageArr.length + 1))
  randImages.push(imageArr[Math.floor(Math.random() * imageArr.length + 1)])
}

function Game () {
  const [gameState, setGameState] = useState({
    turn: 1,
    images: randImages,
    currentScore: 0,
    totalScore: 0
  })

  return (
        <div className="game">
            <GamePhoto image={randImages[gameState.turn - 1]} />
            <GameControls
            gameState={gameState}
            setGameState={setGameState}
            />
        </div>
  )
}

export default Game
