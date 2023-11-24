import React from 'react'
import "./Header.css"
import Logo from './Logo'
import HeadTitle from './HeadTitle'
import Buttons from './Buttons'

function Header() {
  return (
    <header>
      <Logo />
      <HeadTitle />
      <Buttons />
    </header>
  )
}

export default Header
