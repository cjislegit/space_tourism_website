import { useState } from 'react';
import DestinationImgs from '../assets/destination/DestinationImgs';

const DestinationPage = () => {
  const { moon, mars, europa, titan } = DestinationImgs;

  const [destinationChoice, setDestinationChoice] = useState('moon');

  const handleChoiceClick = (choice) => {
    setDestinationChoice(choice);
  };

  let destination;

  switch (destinationChoice) {
    case 'moon':
      destination = moon;
      break;
    case 'mars':
      destination = mars;
      break;
    case 'europa':
      destination = europa;
      break;
    case 'titan':
      destination = titan;
      break;
    default:
      destination = moon;
      break;
  }

  return (
    <>
      <section className='text-white barlow-condensed-regular flex flex-col items-center text-[16px] uppercase tracking-[2.7px]'>
        <p>
          <span className='opacity-[25%] font-bold pr-[18px] '>01</span> Pick
          Your Destination
        </p>
        <img
          src={destination.image}
          alt={moon.alt}
          className='w-[170px] h-[170px] mt-[32px]'
        />
      </section>
      <section className='flex flex-col items-center mt-[26px] text-white px-[22px]'>
        <div className=' flex w-full justify-between pr-[70px] pl-[70px] barlow-condensed-regular text-[14px] tracking-[2.3px]'>
          <div
            className={
              destinationChoice == 'moon'
                ? 'border-b-2 border-white pb-[2px]'
                : null
            }
            onClick={() => handleChoiceClick('moon')}
          >
            MOON
          </div>
          <div
            className={
              destinationChoice == 'mars'
                ? 'border-b-2 border-white pb-[2px]'
                : null
            }
            onClick={() => handleChoiceClick('mars')}
          >
            MARS
          </div>
          <div
            className={
              destinationChoice == 'europa'
                ? 'border-b-2 border-white pb-[2px]'
                : null
            }
            onClick={() => handleChoiceClick('europa')}
          >
            EUROPA
          </div>
          <div
            className={
              destinationChoice == 'titan'
                ? 'border-b-2 border-white pb-[2px]'
                : null
            }
            onClick={() => handleChoiceClick('titan')}
          >
            TITAN
          </div>
        </div>
        <h1 className='bellefair-regular text-[56px] uppercase pt-[20px]'>
          {destination.name}
        </h1>
        <div className='barlow-regular text-[16px] text-center'>
          {destination.desc}
        </div>
        <div className='w-full flex flex-col items-center mt-[32px] border-t-[1px] border-[#383B4B] pt-[32px]'>
          <div className='flex flex-col text-center '>
            <span className='barlow-condensed-regular text-[14px] pb-[12px]'>
              AVG. DISTANCE
            </span>
            <span className='bellefair-regular text-[28px]'>
              {destination.dist} KM
            </span>
          </div>
          <div className='flex flex-col text-center mt-[32px]'>
            <span className='barlow-condensed-regular text-[14px] pb-[12px]'>
              EST. TRAVEL TIME
            </span>
            <span className='bellefair-regular text-[28px]'>
              {destination.time}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationPage;
