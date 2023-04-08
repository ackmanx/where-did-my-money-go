import JSON5 from 'json5'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import { MoneyResponse } from './money-api-types'
import { getQueryParam, setQueryParam } from './utils'

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(getQueryParam('tabIndex') ?? 0)
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

  const handleChange = (event: SyntheticEvent, newTabIndex: number) => {
    setQueryParam('tabIndex', newTabIndex)
    setCurrentTabIndex(newTabIndex)
  }

  return (
    <main>
      <div data-id='body-container'>
        hello
        <div style={{ borderBottom: '8px', borderColor: 'divider' }} data-id='tabs'>
          {/*<Tabs value={currentTabIndex} variant='fullWidth' onChange={handleChange}>*/}
          {/*  {pages.map(({ name }) => (*/}
          {/*    <Tab key={name} label={name} />*/}
          {/*  ))}*/}
          {/*</Tabs>*/}
        </div>
        <div style={{ marginTop: '16px' }}>
          {/*{pages.map(*/}
          {/*  ({ name, component }, index) =>*/}
          {/*    currentTabIndex === index && <Fragment key={name}>{component}</Fragment>*/}
          {/*)}*/}
        </div>
      </div>
    </main>
  )
}

export default App
