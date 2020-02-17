import React, { useState } from 'react'
import Menu from '../menu/Menu'

const Game = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [showTutorial, setShowTutorial] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [exit, setExit] = useState(false)

  return (
    <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
  )
}

export default Game
