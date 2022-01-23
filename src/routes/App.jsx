import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';
import Layout from '@containers/Layout';
import Home from '@pages/Home';

const App = () => {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;