import JSON5 from 'json5'
import React, { useEffect, useState } from 'react'

import { MoneyResponse } from '../money-api-types'
import { Loans } from '../pages/Loans'
import { Overview } from '../pages/Overview'
import { Header } from './Header'

function App() {
  const [moneyData, setMoneyData] = useState<MoneyResponse>()

  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json5')
      setMoneyData(JSON5.parse(await response.text()))
    }

    getJson()
  }, [])

  return (
    <>
      <Header />

      {moneyData && (
        <main style={{ margin: '16px' }}>
          <Overview moneyData={moneyData} />
          <Loans loans={moneyData.loans} />
        </main>
      )}
    </>
  )
}

export default App
