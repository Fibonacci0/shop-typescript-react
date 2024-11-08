import { useState } from 'react'
import './App.css'
import AppLayout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
