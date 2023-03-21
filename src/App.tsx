import { Box, Tab, Tabs } from '@mui/material'
import JSON5 from 'json5'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import AppIcon from './app-icon.png'
import { MoneyResponse } from './money-api-types'
import { CreditCards } from './pages/CreditCards'
import { Loans } from './pages/Loans'
import { getQueryParam, setQueryParam } from './utils'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabBody(props: TabPanelProps) {
  const { children, value, index } = props

  if (value !== index) {
    return null
  }

  return <Box sx={{ p: 3 }}>{children}</Box>
}

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

      <Box component='main'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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

        {pages.map(({ name, component }, index) => (
          <TabBody key={name} value={currentTabIndex} index={index}>
            {component}
          </TabBody>
        ))}
      </Box>
    </Box>
  )
}

export default App
