import { useState } from 'react'
import './App.css'
import AppLayout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import InfoTab from './components/InfoTab'
import AdminPage from './components/Admin'
import ProductInfo from './components/ProductInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Routes>
                {/* Routes without layout */}
                <Route path="/" element={<Home />} />
                
                {/* Routes with layout */}
                <Route element={<AppLayout />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/info" element={<InfoTab />} />
                    <Route path='/details/:id' element={<ProductInfo />} />
                    { <Route path="/admin" element={<AdminPage />} /> }
                </Route>
            </Routes>
    </>
  )
}

export default App
