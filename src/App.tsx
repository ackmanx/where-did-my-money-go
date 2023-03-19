import './App.css'
import { useEffect } from "react";

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
      hello world
    </div>
  )
}

export default App
