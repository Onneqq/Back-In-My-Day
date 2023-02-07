/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Slider } from '@mui/material'
import './CSS/GameControls.scss'

function GameControlsPlaying ({ gameState, setGameState }) {
  const [value, setValue] = useState(1900)
  // console.log(gameState.turn)
  // console.log(value)
  // console.log(userScores)
  // console.log(gameState.images[gameState.turn - 1][2])

  const handleSubmit = () => {
    let score = (50 - Math.abs((gameState.images[gameState.turn - 1][2] - value))) * 50
    if (score < 0) {
      score = 0
    }
    setGameState({ ...gameState, currentScore: score, totalScore: gameState.totalScore + score, turnResults: true })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
    <Slider
  aria-label="Small steps"
  defaultValue={1962}
  onChange={handleChange}
  step={1}
  marks
  min={1900}
  max={2023}
  valueLabelDisplay="auto"
  sx={{
    height: 20
  }}
/>
<button onClick={handleSubmit}>Submit</button>
</>
  )
}

export default GameControlsPlaying
