import React from 'react'
import './CSS/GamePhoto.scss'

function GamePhoto ({ image }) {
  return (
        <img src={image[1]} />
  )
}

export default GamePhoto
