import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import EmergencyBanner from '../components/common/EmergencyBanner';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;