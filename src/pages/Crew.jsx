import { useState } from 'react';
import { DATA } from '../data';

const CrewPage = () => {
  const [crewMember, setCrewMember] = useState(0);

  const crew = DATA.crew;

  const handleCrewClick = (newCrew) => {
    setCrewMember(newCrew);
  };

  return (
    <div className='flex flex-col 2xl:flex-col flex-grow'>
      <section className='text-white barlow-condensed-regular flex flex-col items-center text-[16px] uppercase tracking-[2.7px] md:pt-[40px] 2xl:pl-[117px] 2xl:self-center 2xl:flex-grow 2xl:w-full'>
        <p className='md:self-start md:pl-[24px] md:text-[20px] 2xl:text-[28px] 2xl:mb-[97px] 2xl:tracking-widest'>
          <span className='opacity-[25%] font-bold pr-[18px] '>02</span> Meet
          Your Crew
        </p>
        <div className='w-[90%] flex justify-center border-b-[1px] border-[#383B4B] md:hidden'>
          <img
            src={crew[crewMember].images.webp}
            // alt={moon.alt}
            className='w-[177px] h-[222px] mt-[32px] md:w-[300px] md:h-[300px] md:mt-[60px] 2xl:w-[445px] 2xl:h-[445px] 2xl:mt-0 2xl:self-start 2xl:ml-[85px]'
          />
        </div>
      </section>
      <section className=' flex flex-wrap mt-[32px] justify-center text-center 2xl:flex-nowrap'>
        <div className='flex w-[33%] justify-around md:hidden'>
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              crewMember == 0 ? 'bg-white' : 'bg-[#383B4B]'
            }`}
            onClick={() => handleCrewClick(0)}
          ></div>
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              crewMember == 1 ? 'bg-white' : 'bg-[#383B4B]'
            }`}
            onClick={() => handleCrewClick(1)}
          ></div>
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              crewMember == 2 ? 'bg-white' : 'bg-[#383B4B]'
            }`}
            onClick={() => handleCrewClick(2)}
          ></div>
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              crewMember == 3 ? 'bg-white' : 'bg-[#383B4B]'
            }`}
            onClick={() => handleCrewClick(3)}
          ></div>
        </div>
        <div className='text-white mt-[32px] w-[90%]'>
          <div className='bellefair-regular  text-[16px] uppercase md:text-[24px] 2xl:text-[32px] 2xl:text-start'>
            {crew[crewMember].role}
          </div>
          <div className='bellefair-regular uppercase text-[24px] md:text-[40px] 2xl:text-[56px] 2xl:text-start'>
            {crew[crewMember].name}
          </div>
          <div className='barlow-regular text-[15px] px-[15px] text-center mt-[16px] leading-relaxed md:px-[20%] 2xl:text-[18px] 2xl:text-start 2xl:p-0 2xl:pr-[40%]'>
            {crew[crewMember].bio}
          </div>
          <div className='hidden md:flex justify-center mt-[40px] 2xl:justify-start'>
            <div
              className={`w-[10px] h-[10px] rounded-full mr-[16px] ${
                crewMember == 0 ? 'bg-white' : 'bg-[#383B4B]'
              }`}
              onClick={() => handleCrewClick(0)}
            ></div>
            <div
              className={`w-[10px] h-[10px] rounded-full mr-[16px]  ${
                crewMember == 1 ? 'bg-white' : 'bg-[#383B4B]'
              }`}
              onClick={() => handleCrewClick(1)}
            ></div>
            <div
              className={`w-[10px] h-[10px] rounded-full mr-[16px]  ${
                crewMember == 2 ? 'bg-white' : 'bg-[#383B4B]'
              }`}
              onClick={() => handleCrewClick(2)}
            ></div>
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                crewMember == 3 ? 'bg-white' : 'bg-[#383B4B]'
              }`}
              onClick={() => handleCrewClick(3)}
            ></div>
          </div>
        </div>
        <div className=' hidden w-[90%] md:flex justify-center h-[50%]'>
          <img
            src={crew[crewMember].images.webp}
            // alt={moon.alt}
            className='w-[456px] h-[500px] '
          />
        </div>
      </section>
    </div>
  );
};

export default CrewPage;
