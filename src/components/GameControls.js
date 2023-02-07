/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Slider } from '@mui/material'
import './CSS/GameControls.scss'

function GameControls (props) {
  const [value, setValue] = useState(1900)

  return (

    <Slider
  aria-label="Small steps"
  defaultValue={0.00000005}
  getAriaValueText={(e) => console.log(e)}
  step={1}
  marks
  min={1900}
  max={2023}
  valueLabelDisplay="auto"
/>
  )
}

export default GameControls
