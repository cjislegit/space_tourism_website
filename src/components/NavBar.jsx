import { NavLink } from 'react-router-dom';

import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const NavBar = () => {
  return (
    <nav className='inline-flex  h-20 w-full items-center justify-between px-[24px] md:pr-0 max-w-[2560px]'>
      <div>
        <img src={logo} alt='' className='h-[40px] w-[40px] ' />
      </div>
      <div className='md:w-[60%] md:h-full '>
        <nav className='hidden text-white text-[14px] uppercase h-full md:flex justify-evenly bg-white bg-opacity-[4%] backdrop-blur-md'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'md:h-full flex items-center border-b-2 border-white'
                : 'md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to='/destination'
            className={({ isActive }) =>
              isActive
                ? 'md:h-full flex items-center border-b-2 border-white'
                : 'md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            }
          >
            Destination
          </NavLink>
          <NavLink
            to='/crew'
            className={({ isActive }) =>
              isActive
                ? 'md:h-full flex items-center border-b-2 border-white'
                : 'md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            }
          >
            Crew
          </NavLink>
          <NavLink
            to='/technology'
            className={({ isActive }) =>
              isActive
                ? 'md:h-full flex items-center border-b-2 border-white'
                : 'md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            }
          >
            technology
          </NavLink>
        </nav>
        <img
          src={hamburger}
          alt=''
          className='block h-[24px] w-[21px] justify-self-end md:hidden'
        />
      </div>
    </nav>
  );
};

export default NavBar;
