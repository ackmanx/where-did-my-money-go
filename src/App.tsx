import { Box, Tab, Tabs, Typography } from '@mui/material'
import JSON5 from 'json5'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import AppIcon from './app-icon.png'
import { MoneyResponse } from './money-api-types'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel__${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

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

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue)
  }

  const TABS = [
    'Overview',
    'Loans',
    'Credit Cards',
    'Subscriptions',
    'Utilities',
    'People',
    'Investment',
    'Misc',
  ]

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
            {TABS.map((tab) => (
              <Tab key={tab} label={tab} />
            ))}
          </Tabs>
        </Box>

        {TABS.map((tab, index) => (
          <TabPanel value={currentTabIndex} index={index}>
            {tab}
          </TabPanel>
        ))}
      </Box>
    </Box>
  )
}

export default App
