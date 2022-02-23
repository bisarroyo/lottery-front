import React from 'react'
import Navbar from './Navbar/Navbar/Navbar'
import GlobalStyle from '@styles/GlobalStyle'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
