import JSON5 from 'json5'
import React, { useEffect, useState } from 'react'

import { MoneyResponse } from '../money-api-types'
import { CreditCards } from '../pages/CreditCards'
import { Healthcare } from '../pages/Healthcare'
import { Investments } from '../pages/Investments'
import { Loans } from '../pages/Loans'
import { Misc } from '../pages/Misc'
import { Overview } from '../pages/Overview'
import { People } from '../pages/People'
import { Subscriptions } from '../pages/Subscriptions'
import { Utilities } from '../pages/Utilities'
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
        <main style={{ margin: '24px' }}>
          <Overview moneyData={moneyData} />
          <Loans loans={moneyData.loans} />
          <Subscriptions subscriptions={moneyData.subscriptions} />
          <Utilities utilities={moneyData.utilities} />
          <Healthcare healthcare={moneyData.healthcare} />
          <Misc misc={moneyData.misc} />
          <CreditCards cards={moneyData.creditCards} />
          <Investments investments={moneyData.investments} />
          <People people={moneyData.people} />
        </main>
      )}
    </>
  )
}

export default App
