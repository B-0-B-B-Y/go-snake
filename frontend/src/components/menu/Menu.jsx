import React from 'react'
import './Menu.scss'

const Menu = ({ showMenu, setShowMenu }) => {
  const handlePlayButtonClick = () => {
    setShowMenu(false)
  }

  if (showMenu)
    return (
        <div className='menu'>
          <h1 className='title'>Go-Snake, Go!</h1>
          <div className='menu__list'>
            <h3 className='menu__item' onClick={handlePlayButtonClick}>
              Play!
            </h3>
            <h3 className='menu__item'>
              Tutorial
            </h3>
            <h3 className='menu__item'>
              Options
            </h3>
            <h3 className='menu__item'>
              Exit
            </h3>
          </div>
        </div>
    )
  return null
}

export default Menu
