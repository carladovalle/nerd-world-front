import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Home from './pages/Dashboard/Home';
import { PrivatePage } from './pages/PrivatePage';
import { Products } from './pages/Dashboard/Products/Products';
import { ProductPage } from './pages/Dashboard/Products/ProductPage';
import { Cart } from './pages/Dashboard/Cart/Cart';
import { Payment } from './pages/Dashboard/Payment/Payment';
import { Success } from './pages/Dashboard/Success/Success';

import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Enroll />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="home" element={<Home />} />
                <Route path="home/:typeId" element={<Products />} />
                <Route path=":typeId" element={<Products />} />
                <Route path=':typeId/:productId' element={<ProductPage/>} /> 
              </Route>


              <Route 
                path='cart' 
                element={
                  <PrivatePage>
                    <Cart />
                  </PrivatePage>
                } 
              />

              <Route 
                path='payment' 
                element={
                  <PrivatePage>
                    <Payment />
                  </PrivatePage>
                } 
              />

              <Route 
                path='success' 
                element={
                  <PrivatePage>
                    <Success />
                  </PrivatePage>
                } 
              />
            </Routes>
          </Router>
        </UserProvider>
    </>
  );
}