const HomePage = () => {
  return (
    <>
      <section className='text-white pt-[60px] px-6 text-center h-1/2 flex flex-col  items-center 2xl:self-center 2xl:flex-grow 2xl:items-start 2xl:pl-[165px]'>
        <p className='barlow-regular text-base md:text-[20px] 2xl:text-left 2xl:pr-[170px]'>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className='bellefair-regular text-[80px] md:text-[150px] '>
          SPACE
        </h1>
        <p className='barlow-regular text-base max-w-[444px] leading-[28px] 2xl:text-left'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className=' flex items-center justify-center flex-grow 2xl:self-center '>
        <div className='bg-white bellefair-regular text-[20px] flex justify-center items-center w-[150px] h-[150px] rounded-full md:w-[242px] md:h-[242px] md:text-[32px]'>
          <a href=''>EXPLORE</a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
