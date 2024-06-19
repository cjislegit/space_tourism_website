import { useState } from 'react';
import { DATA } from '../data';

const CrewPage = () => {
  const crew = DATA.crew;

  return (
    <>
      <section className='text-white barlow-condensed-regular flex flex-col items-center text-[16px] uppercase tracking-[2.7px] md:pt-[40px] 2xl:pl-[117px] 2xl:self-center 2xl:flex-grow'>
        <p className='md:self-start md:pl-[24px] md:text-[20px] 2xl:text-[28px] 2xl:mb-[97px] 2xl:tracking-widest'>
          <span className='opacity-[25%] font-bold pr-[18px] '>01</span> Meet
          Your Crew
        </p>
      </section>
    </>
  );
};

export default CrewPage;
