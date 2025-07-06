import React from 'react'
import NavBar from './Component/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
    </Routes>
    </>
  )
}

export default App