import AppColorForm from './AppColorForm';
import React from 'react';
import '../App.css';

const logColor = (title, color) =>
  console.log(`New Color: ${title} | ${color}`);

function App() {
  return (
    <div className="App">
      <AppColorForm  onNewColor={logColor}/>
    </div>
  );
}

export default App;
