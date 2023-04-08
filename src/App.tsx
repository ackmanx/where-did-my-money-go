import { Box, Tab, Tabs } from '@mui/material'
import JSON5 from 'json5'
import React, { Fragment, SyntheticEvent, useEffect, useState } from 'react'

import { MoneyResponse } from './money-api-types'
import { Loans } from './pages/Loans'
import { getQueryParam, setQueryParam } from './utils'

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(getQueryParam('tabIndex') ?? 0)
  const [moneyData, setMoneyData] = useState<MoneyResponse>()

  const pages = [
    { name: 'Overview', component: <h1>hello overview</h1> },
    { name: 'Debt', component: <Loans loans={moneyData?.loans} /> },
    // { name: 'Loans', component: <Loans loans={moneyData?.loans} /> },
    // { name: 'Credit Cards', component: <CreditCards cards={moneyData?.creditCards} /> },
    // { name: 'Healthcare', component: null },
    // { name: 'People', component: null },
    { name: 'Ugh', component: null },
    // {
    //   name: 'Subscriptions',
    //   component: <Subscriptions subscriptions={moneyData?.subscriptions} />,
    // },
    // { name: 'Utilities', component: null },
    // { name: 'Investment', component: null },
    // { name: 'Misc', component: null },
  ]

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
      <Box data-id='body-container'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} data-id='tabs'>
          <Tabs value={currentTabIndex} variant='fullWidth' onChange={handleChange}>
            {pages.map(({ name }) => (
              <Tab key={name} label={name} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ mt: 2 }}>
          {pages.map(
            ({ name, component }, index) =>
              currentTabIndex === index && <Fragment key={name}>{component}</Fragment>
          )}
        </Box>
      </Box>
    </main>
  )
}

export default App
