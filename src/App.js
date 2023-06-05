import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Launch from './pages/Launch';
import Dashboard from './pages/Dashboard';
import Home from './pages/Dashboard/Home';
import { PrivatePage } from './pages/PrivatePage';
import { Products } from './pages/Dashboard/Products/Products';
import { ProductPage } from './pages/Dashboard/Products/ProductPage';
import { Cart } from './pages/Dashboard/Cart/Cart';
import { Payment } from './pages/Dashboard/Payment/Payment';
import { Success } from './pages/Dashboard/Success/Success';

import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';

export default function App() {
  return (
    <>
        <UserProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/launch" element={<Launch />} />

                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="home" element={<Home />} />
                  <Route path="home/:typeId" element={<Products />} />
                  <Route path=":typeId" element={<Products />} />
                  <Route path=':typeId/:productId' element={<ProductPage/>} /> 
                </Route>

                <Route 
                  path='cart' 
                  element={
                      <Cart />
                  } 
                />

                <Route 
                  path='payment' 
                  element={
                      <Payment />
                  } 
                />

                <Route 
                  path='success' 
                  element={
                      <Success />
                  } 
                />
              </Routes>
            </Router>
          </CartProvider>
        </UserProvider>
    </>
  );
}