import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AlleBiere from './pages/AlleBiere'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allebiere' element={<AlleBiere/>} />
        <Route path='/allebiere/:id' element={<ProductDetail/>} />
      </Routes>
    </>
  )
}

export default App
