import React, { useState } from 'react'
import Game from './Game'
// import './components/CSS/Main.scss'

const Main = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  const startGame = () => {
    setHasGameStarted(!hasGameStarted)
  }

  return (
    <div className="main">
        <h1>B.I.M.D</h1>

        <h2>Leap into the past and figure out when!</h2>
        <p>How to play:</p>
        <ul>
          <li>Press the play button below</li>
          <li>5 random images will be shown to you one at a time</li>
          <li>Guess WHEN you think the photograph was taken</li>
          <li>You will receive a score based on how close your guess was</li>
        </ul>

        {hasGameStarted ? <Game /> : <button onClick={startGame}>PLAY!</button>}
    </div>
  )
}

export default Main
