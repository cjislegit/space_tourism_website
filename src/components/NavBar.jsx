import logo from '../assets/shared/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex bg-indigo-500 h-20 w-full'>
      <div>
        <img src={logo} alt='' className='h-[40px] w-[40px] ' />
      </div>
      <div></div>
    </nav>
  );
};

export default NavBar;
