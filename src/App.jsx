import React from 'react'
import Home from './pages/home/Home'
import Topheader from './components/header/Topheader'
import Bottomheader from './components/header/Bottomheader'

function App() {

  return (
    <>
      <header>
        <Topheader/>
        <Bottomheader/>
      </header>

      <Home />
    </>
  )
}

export default App
