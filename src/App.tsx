import './App.css'
import AppLayout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import InfoTab from './components/InfoTab'
import AdminPage from './components/Admin'
import ProductInfo from './components/ProductInfo'
import Register from './components/Register'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import Login from './components/Login'

function App() {
  return (
    <>
            <Routes>
                {/* Routes without layout */}
                <Route path="/" element={<Home />} />
                
                {/* Routes with layout */}
                <Route element={<AppLayout />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/info" element={<InfoTab />} />
                    <Route path='/create' element={<CreateProduct />} />
                    <Route path='/edit/:id' element={<EditProduct />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/details/:id' element={<ProductInfo />} />
                    <Route path='*' element={<p>page not found 404!</p>} />
                    { <Route path="/admin" element={<AdminPage />} /> }
                </Route>
            </Routes>
    </>
  )
}

export default App
