import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', width: '100vw', margin: 0, padding: 0 }}>
        <Outlet />
      </main>
    </>
  );
}
