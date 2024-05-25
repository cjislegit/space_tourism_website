import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';

const RootLayout = () => {
  const location = useLocation();

  const [background, setBackground] = useState('h-full');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setBackground(
          'bg-backgroundHomeMobile md:bg-backgroundHomeTablet 2xl:bg-backgroundHomeDesktop'
        );
        break;
      case '/destination':
        setBackground(
          'h-full bg-backgroundDestinationMobile bg-no-repeat bg-fixed bg-center bg-cover'
        );
        break;

      default:
        setBackground('h-full');
        break;
    }
  }, []);

  return (
    <div
      className={`${background} h-full flex flex-col bg-no-repeat bg-fixed bg-center bg-cover 2xl:pt-[50px] 2xl:pl-[50px]`}
    >
      <NavBar />
      <main className='flex flex-col flex-grow 2xl:flex-row'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
