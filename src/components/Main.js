import React, { useState } from 'react'
import Game from './Game'
import './CSS/Main.scss'
// import './components/CSS/Main.scss'

const Main = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false)

  const startGame = () => {
    setHasGameStarted(!hasGameStarted)
  }

  return (
    <>
    <div className="main">
      <h1>Back In My Day</h1>
      {hasGameStarted
        ? (
        <Game />
          )
        : (
        <div className='rules-list'>
          <h2>Leap into the past and figure out when!</h2>
          <p>How to play:</p>
          <ul>
            <li>Press the play button below</li>
            <li>5 random images will be shown to you one at a time</li>
            <li>Use the bar below the image to guess WHEN you think the photograph was taken</li>
            <li>You will receive a score based on how close your guess was</li>
          </ul>
          <button className='button-80' role="button" onClick={startGame}>PLAY!</button>
        </div>
          )}
    </div>
    <div className='footer'>
      <p>Check out my GitHub <a href="https://github.com/Onneqq" rel='noreferrer' target="_blank">here</a>.</p>
    </div>
  </>
  )
}

export default Main
