import React from 'react'

import AppIcon from '../images/app-icon.png'

export const Header = () => (
  <>
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
    <nav style={{ position: 'sticky', top: '0px', backgroundColor: 'white' }}>
      <ul style={{ display: 'flex', margin: '0 16px' }}>
        <NavItem>O</NavItem>
        <NavItem>L</NavItem>
        <NavItem>S</NavItem>
        <NavItem>U</NavItem>
        <NavItem>C</NavItem>
        <NavItem>I</NavItem>
        <NavItem>M</NavItem>
        <NavItem>P</NavItem>
      </ul>
    </nav>
  </>
)

const NavItem = ({ children }: any) => (
  <li style={{ width: '50px', fontSize: '26px', textAlign: 'center', fontFamily: 'Rubik Glitch' }}>
    {children}
  </li>
)
