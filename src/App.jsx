import React from 'react'
import Layout from './components/shared/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Products from './components/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='products' element={<Products/>}></Route>               
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
