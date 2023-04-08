import React from 'react'

import AppIcon from './app-icon.png'

export const Header = () => (
  <header
    style={{
      height: '100px',
      textAlign: 'center',
    }}
  >
    <img src={AppIcon} style={{ height: '100%', maxWidth: '100vw' }} alt='app-icon' />
  </header>
)
