import React from 'react'
import { Container, Content } from '../Sidebar/style'
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Gráficos" />
        <SidebarItem Icon={FaUserAlt} Text="Usuário" />
        <SidebarItem Icon={FaEnvelope} Text="E-mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Reuniões" />
        <SidebarItem Icon={FaIdCardAlt} Text="Permissões" />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatórios" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" />
      </Content>
    </Container>
  )
}

export default Sidebar
