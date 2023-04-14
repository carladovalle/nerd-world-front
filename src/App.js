import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import About from './pages/Dashboard/About';
import Home from './pages/Dashboard/Home';
import { Products } from './pages/Dashboard/Products/Products';
import { ProductPage } from './pages/Dashboard/Products/ProductPage';

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

              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              >
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path=":categoryId" element={<Products />} />
                <Route path="product/:productId" element={<ProductPage />} />
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