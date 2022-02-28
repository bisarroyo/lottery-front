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
import Games from '@pages/Games'
import GameOne from '@pages/GameOne'

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
            <Route path='/games' element={<Games />} />
            <Route path='/games/one' element={<GameOne />} />
            <Route path='/games/express' element={<Games />} />
            <Route path='/games/lotto' element={<Games />} />
            <Route path='/games/bingo' element={<Games />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
