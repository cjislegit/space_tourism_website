import { useState } from 'react';
import { DATA } from '../data';

const CrewPage = () => {
  const [crewMember, setCrewMember] = useState(0);

  const crew = DATA.crew;

  return (
    <>
      <section className='text-white barlow-condensed-regular flex flex-col items-center text-[16px] uppercase tracking-[2.7px] md:pt-[40px] 2xl:pl-[117px] 2xl:self-center 2xl:flex-grow'>
        <p className='md:self-start md:pl-[24px] md:text-[20px] 2xl:text-[28px] 2xl:mb-[97px] 2xl:tracking-widest'>
          <span className='opacity-[25%] font-bold pr-[18px] '>02</span> Meet
          Your Crew
        </p>
        <div className='w-[90%] flex justify-center border-b-[1px] border-[#383B4B]'>
          <img
            src={crew[crewMember].images.webp}
            // alt={moon.alt}
            className='w-[177px] h-[222px] mt-[32px] md:w-[300px] md:h-[300px] md:mt-[60px] 2xl:w-[445px] 2xl:h-[445px] 2xl:mt-0 2xl:self-start 2xl:ml-[85px]'
          />
        </div>
      </section>
      <section className=' flex flex-wrap mt-[32px] justify-center text-center'>
        <div className='flex w-[33%] justify-around'>
          <div className='w-[10px] h-[10px] rounded-full bg-white'></div>
          <div className='w-[10px] h-[10px] rounded-full bg-[#383B4B]'></div>
          <div className='w-[10px] h-[10px] rounded-full bg-[#383B4B]'></div>
          <div className='w-[10px] h-[10px] rounded-full bg-[#383B4B]'></div>
        </div>
        <div className='text-white mt-[32px] w-[90%]'>
          <div className='bellefair-regular  text-[16px] uppercase'>
            {crew[crewMember].role}
          </div>
          <div>{crew[crewMember].name}</div>
          <div>{crew[crewMember].bio}</div>
        </div>
      </section>
    </>
  );
};

export default CrewPage;
