import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      <div className="logo">
        <img className="logo" src={logo} />
        <h1>Applied Intelligence </h1>
      </div>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header
