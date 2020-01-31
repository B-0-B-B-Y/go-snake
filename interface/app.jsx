const SnakeGameInterface = () => {
  return (
    <div className='go-snake'>
      <h1>Is this shit working?</h1>
      <canvas className='go-snake__board'/>
    </div>
  )
}

const render = () => {
  const app = document.getElementById('app')

  preact.render(<SnakeGameInterface />, app, app.lastElementChild)
}

render()
