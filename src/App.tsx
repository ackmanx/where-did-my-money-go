import JSON5 from 'json5'
import React, { useEffect, useState } from 'react'

import { Header } from './Header'
import { MoneyResponse } from './money-api-types'
import { Overview } from './pages/Overview'

function App() {
  // const [currentTabIndex, setCurrentTabIndex] = useState(getQueryParam('tabIndex') ?? 0)
  const [moneyData, setMoneyData] = useState<MoneyResponse>()

  // const pages = [
  //   { name: 'Overview', component: <Overview incomes={} loans={} subscriptions={} utilities={} misc={} />},
  //   { name: 'Debt', component: <Loans loans={moneyData?.loans} /> },
  //   // { name: 'Loans', component: <Loans loans={moneyData?.loans} /> },
  //   // { name: 'Credit Cards', component: <CreditCards cards={moneyData?.creditCards} /> },
  //   // { name: 'Healthcare', component: null },
  //   // { name: 'People', component: null },
  //   { name: 'Ugh', component: null },
  //   // {
  //   //   name: 'Subscriptions',
  //   //   component: <Subscriptions subscriptions={moneyData?.subscriptions} />,
  //   // },
  //   // { name: 'Utilities', component: null },
  //   // { name: 'Investment', component: null },
  //   // { name: 'Misc', component: null },
  // ]

  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json5')
      setMoneyData(JSON5.parse(await response.text()))
    }

    getJson()
  }, [])

  // const handleChange = (event: SyntheticEvent, newTabIndex: number) => {
  //   setQueryParam('tabIndex', newTabIndex)
  //   setCurrentTabIndex(newTabIndex)
  // }

  return (
    <>
      <Header />
      {moneyData && (
        <main>
          <div style={{ marginTop: '16px' }}>
            <Overview moneyData={moneyData} />
          </div>
        </main>
      )}
    </>
  )
}

export default App
