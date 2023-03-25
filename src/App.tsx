import { Box, Tab, Tabs } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import JSON5 from 'json5'
import React, { Fragment, SyntheticEvent, useEffect, useState } from 'react'

import AppIcon from './app-icon.png'
import { MoneyResponse } from './money-api-types'
import { CreditCards } from './pages/CreditCards'
import { Loans } from './pages/Loans'
import { getQueryParam, setQueryParam } from './utils'

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(getQueryParam('tabIndex') ?? 0)
  const [moneyData, setMoneyData] = useState<MoneyResponse>()

  const pages = [
    { name: 'Overview', component: <h1>hello overview</h1> },
    { name: 'Loans', component: <Loans loans={moneyData?.loans} /> },
    { name: 'Credit Cards', component: <CreditCards cards={moneyData?.creditCards} /> },
    { name: 'Subscriptions', component: null },
    { name: 'Utilities', component: null },
    { name: 'People', component: null },
    { name: 'Investment', component: null },
    { name: 'Misc', component: null },
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
    <Box component='main' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        component='header'
        sx={{
          height: '50px',
          padding: '16px',
        }}
      >
        <Box component='img' sx={{ height: '100%' }} src={AppIcon} alt='app icon' />
      </Box>

      <Grid2
        container
        flexDirection='column'
        alignItems='center'
        width='1080px'
        data-id='body-container'
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} data-id='tabs'>
          <Tabs
            value={currentTabIndex}
            variant='scrollable'
            scrollButtons='auto'
            sx={{ maxWidth: '900px' }}
            onChange={handleChange}
          >
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
      </Grid2>
    </Box>
  )
}

export default App
