import { Box, Tab, Tabs } from '@mui/material'
import JSON5 from 'json5'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import AppIcon from './app-icon.png'
import { MoneyResponse } from './money-api-types'

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

const pages = [
  { name: 'Overview', component: null },
  { name: 'Loans', component: null },
  { name: 'Credit Cards', component: null },
  { name: 'Subscriptions', component: null },
  { name: 'Utilities', component: null },
  { name: 'People', component: null },
  { name: 'Investment', component: null },
  { name: 'Misc', component: null },
]

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json5')
      const x: MoneyResponse = JSON5.parse(await response.text())
      console.log(777, x)
    }

    getJson()
  }, [])

  const handleChange = (event: SyntheticEvent, newTabIndex: number) => {
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

        {pages.map(({ name }, index) => (
          <TabBody key={name} value={currentTabIndex} index={index}>
            {name}
          </TabBody>
        ))}
      </Box>
    </Box>
  )
}

export default App
