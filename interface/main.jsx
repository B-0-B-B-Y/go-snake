import React from 'react'
import ReactDOM from 'react-dom'

const SnakeGameInterface = () => {
  return (
    <div className='go-snake'>
      <h1>Is this shit working?</h1>
      <canvas className='go-snake__board'/>
    </div>
  )
}

export default function renderSnakeGameInterface(element) {
  ReactDOM.render(<SnakeGameInterface />, element)
}
