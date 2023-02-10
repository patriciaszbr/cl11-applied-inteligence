import React from 'react'
import { Container } from '../SidebarItem/style'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem
