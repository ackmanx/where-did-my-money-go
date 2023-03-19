import './App.css'
import { useEffect } from "react";
import AppIcon from './app-icon.png'

function App() {
  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json')
      console.log(777, await response.json())
    }

    getJson()
  }, [])

  return (
    <div>
      <img src={AppIcon} alt='app icon'/>
    </div>
  )
}

export default App
