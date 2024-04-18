import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const NavBar = () => {
  return (
    <nav className='inline-flex bg-indigo-500 h-20 w-full items-center justify-between px-[24px]'>
      <div>
        <img src={logo} alt='' className='h-[40px] w-[40px] ' />
      </div>
      <div>
        <img
          src={hamburger}
          alt=''
          className='h-[24px] w-[21px] justify-self-end'
        />
      </div>
    </nav>
  );
};

export default NavBar;
