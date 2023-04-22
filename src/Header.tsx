import React from 'react'

import AppIcon from './app-icon.png'

export const Header = () => (
  <header
    style={{
      height: '100px',
      textAlign: 'center',
    }}
  >
    <a
      href='https://github.com/ackmanx/ackmanx.github.io/blob/main/json/money.json5'
      target='_blank'
    >
      <img src={AppIcon} style={{ maxWidth: '100%' }} alt='app-icon' />
    </a>
  </header>
)
