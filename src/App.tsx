import './App.css'
import { useEffect } from "react";
import AppIcon from './app-icon.png'
import JSON5 from 'json5'

function App() {
  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json5')
      console.log(777, JSON5.parse(await response.text()))
    }

    getJson()
  }, [])

  return (
    <header>
      <img src={AppIcon} alt='app icon'/>
    </header>
  )
}

export default App
