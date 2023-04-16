import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavigationBar from '../../components/Dashboard/NavigationBar';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/NavBar/Navbar';
import { SubNavBar } from '../../components/SubNavbar/SubNavbar';

import DashboardLayout from '../../layouts/Dashboard';

export default function Dashboard() {

  return (
    <DashboardLayout>
      <Navbar />
      <SubNavBar />

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;