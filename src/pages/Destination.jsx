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
      </section>
      <section className='flex flex-col items-center mt-[32px]'>
        <img
          src={destination.image}
          alt={moon.alt}
          className='w-[170px] h-[170px]'
        />
        <div className='text-white flex w-full justify-between pr-[70px] pl-[70px] barlow-condensed-regular text-[14px] tracking-[2.3px] mt-[26px]'>
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
      </section>
    </>
  );
};

export default DestinationPage;
