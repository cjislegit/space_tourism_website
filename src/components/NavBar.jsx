import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const NavBar = () => {
  return (
    <nav className='inline-flex  h-20 w-full items-center justify-between px-[24px] md:pr-0'>
      <div>
        <img src={logo} alt='' className='h-[40px] w-[40px] ' />
      </div>
      <div className='md:w-1/2 md:h-full '>
        <nav className='text-white text-[14px] uppercase h-full flex justify-evenly bg-white bg-opacity-[4%] backdrop-blur-md'>
          <a className='md:h-full flex items-center' href=''>
            Home
          </a>
          <a
            className='md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            href=''
          >
            Destination
          </a>
          <a
            className='md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            href=''
          >
            Crew
          </a>
          <a
            className='md:h-full flex items-center hover:border-b-2 hover:border-[#979797]'
            href=''
          >
            technology
          </a>
        </nav>
        <img
          src={hamburger}
          alt=''
          className='h-[24px] w-[21px] justify-self-end md:hidden'
        />
      </div>
    </nav>
  );
};

export default NavBar;
