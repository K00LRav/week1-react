import { useState } from 'react'
import './App.css'
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';

function App() {

  const day = "Monday";
  const myName = "Ray"
  const yourName = "Mike"

  return (
    <div className="App">
      <Header username={myName} color = "pink"/>
      <Header username={yourName} color= "blue"/>
      <p>Today is {day}</p>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
