const HomePage = () => {
  return (
    <>
      <section className='text-white pt-[60px] px-6 text-center'>
        <p className='barlow-regular text-base'>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className='bellefair-regular text-[80px]'>SPACE</h1>
        <p className='barlow-regular text-base'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className=' flex items-center justify-center flex-grow'>
        <div className='bg-white bellefair-regular text-[20px] flex justify-center items-center w-[150px] h-[150px] rounded-full tex'>
          <a href=''>Explore</a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
