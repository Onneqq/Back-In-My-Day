/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'

function GameScore ({ gameState, setGameState }) {
  return (
        <>
        <h3>Score: {gameState.currentScore}</h3>
        <h3>Total Score: {gameState.totalScore}</h3>
        </>
  )
}

export default GameScore
