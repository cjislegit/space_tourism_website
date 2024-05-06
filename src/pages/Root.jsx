import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className='flex flex-col flex-grow'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
