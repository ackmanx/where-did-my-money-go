import './App.css'
import React, { useEffect, useState, SyntheticEvent } from "react";
import AppIcon from './app-icon.png'
import JSON5 from 'json5'
import { Tab, Tabs, Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function getJson() {
      const response = await fetch('https://ackmanx.github.io/json/money.json5')
      console.log(777, JSON5.parse(await response.text()))
    }

    getJson()
  }, [])

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <div>
      <header>
        <img src={AppIcon} alt='app icon'/>
      </header>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview"  />
          <Tab label="Loans" />
          <Tab label="Credit Cards" />
          <Tab label="Subscriptions" />
          <Tab label="Utilities" />
          <Tab label="Healthcare" />
          <Tab label="People" />
          <Tab label="Investment" />
          <Tab label="Misc" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Overview
      </TabPanel>
      <TabPanel value={value} index={1}>
        Loans
      </TabPanel>
      <TabPanel value={value} index={2}>
        Credit Cards
      </TabPanel>
      <TabPanel value={value} index={3}>
        Subscriptions
      </TabPanel>
      <TabPanel value={value} index={4}>
        Utilities
      </TabPanel>
      <TabPanel value={value} index={5}>
        Healthcare
      </TabPanel>
      <TabPanel value={value} index={6}>
        People
      </TabPanel>
      <TabPanel value={value} index={7}>
        Investment
      </TabPanel>
      <TabPanel value={value} index={8}>
        Misc
      </TabPanel>
    </div>
  )
}

export default App
