import AppColorForm from './AppColorForm'
import React from 'react'
import '../stylesheets/App.scss'

function App() {
  const logColor = (title, color) =>
    console.log(`New Color: ${title} | ${color}`)

  return (
    <div className="App">
      <AppColorForm onNewColor={logColor} />
    </div>
  )
}

export default App
