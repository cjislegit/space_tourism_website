import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className='flex flex-col flex-grow 2xl:flex-row'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
