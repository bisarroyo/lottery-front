import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import SignUp from '@pages/SignUp'
import SignIn from '@pages/SignIn'
import LogOut from '@pages/LogOut'
import Recovery from '@pages/Recovery'
import ChangePassword from '@pages/ChangePassword'

const App = () => {
  const InitialState = useInitialState()
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/recovery' element={<Recovery />} />
            <Route path='/recovery?token=:token' element={<ChangePassword />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
