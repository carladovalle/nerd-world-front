import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Home from './pages/Dashboard/Home';
import { Products } from './pages/Dashboard/Products/Products';
import { ProductPage } from './pages/Dashboard/Products/ProductPage';
import { Cart } from './pages/Dashboard/Cart/Cart';
import { Payment } from './pages/Dashboard/Payment/Payment';
import { Success } from './pages/Dashboard/Success/Success';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

export default function App() {
  return (
    <>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Enroll />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route path="/dashboard" element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              >
                <Route path="home" element={<Home />} />
                <Route path="home/:typeId" element={<Products />} />
                <Route path=':typeId/:productId' element={<ProductPage/>} /> 

                <Route path='home/cart' element={<Cart />} />
                <Route path='home/payment' element={<Payment />} />
                <Route path='home/success' element={<Success />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}