import React from 'react'
import Home from './pages/home/Home'
import Topheader from './components/header/Topheader'
import Bottomheader from './components/header/Bottomheader'
import { Routes,Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'


function App() {

  


  return (
    <>
      <header>
        <Topheader/>
        <Bottomheader/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>

      
    </>
  )
}

export default App
