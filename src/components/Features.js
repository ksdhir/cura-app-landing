import Image from 'next/image';
import React from 'react';
import movementScreen from '../assets/screens/screen_movement.png';
import criticalScreen from '../assets/screens/screen_critical.png';
import fallDetectionScreen from '../assets/screens/screen_falldetection.png';
import historyScreen from '../assets/screens/screen_history.png';
import mainScreen from '../assets/screens/screen_main.png';

export const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center font-sans'>
      <div className='flex flex-col items-center w-full px-6 py-20 bg-primary'>
        <h2 className=' flex flex-1 w-full py-6 pb-20 items-center justify-center text-[48px] lg:text-7xl  font-SatoshiBlack text-white bg-primary'>
          Features
        </h2>

        <div className='flex flex-col items-center w-full px-6 sm:px-16 lg:px-28 bg-primary gap-4'>
          <div className='flex w-full flex-1 flex-col lg:flex-row items-center gap-4'>
            <div className='flex flex-row justify-center min-w-fit p-4 lg:p-12 gap-x-3 '>
              <Image
                className='w-28 md:w-40 lg:w-46 xl:w-52'
                src={mainScreen}
                alt='main screen'
                width={500}
                height={500}
              />
              <Image
                className='w-28 md:w-40 lg:w-46 xl:w-52'
                src={historyScreen}
                alt='history screen'
                width={500}
                height={500}
              />
            </div>
            <div className='flex flex-col md:p-8 gap-y-8  justify-between'>
              <h3 className='text-4xl md:text-5xl  font-SatoshiBold text-white text-center lg:text-left'>
                Heart Monitoring
              </h3>
              <p className='text-lg font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-white'>
                Look after the health of the person closest to your heart. Get
                timely updates on the status of your elderly love one’s heart
                rate by connecting CURA on your mobile device with their smart
                watch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full px-6 py-20 sm:px-16 lg:px-28 bg-white gap-4'>
        <div className='flex w-full flex-1 flex-col lg:flex-row-reverse items-center gap-4'>
          <div className='flex flex-row justify-center min-w-fit p-4 lg:px-36'>
            <Image
              className='w-28 md:w-40 lg:w-46 xl:w-52'
              src={movementScreen}
              alt='movement screen'
              width={300}
              height={500}
            />
          </div>
          <div className='flex flex-col md:p-8 gap-y-8  justify-between'>
            <h3 className='text-4xl md:text-5xl  font-SatoshiBold text-primary text-center lg:text-left'>
              Location Updates
            </h3>
            <p className='text-lg font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-primary'>
              Love knows no boundaries. Have peace of mind knowing they are
              where they’re supposed to be with location tracking.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full px-6 py-20 sm:px-16 lg:px-28 bg-primary gap-4'>
        <div className='flex w-full flex-1 flex-col lg:flex-row items-center gap-4'>
          <div className='flex flex-row justify-center min-w-fit p-4 lg:p-12 gap-x-3 '>
            <Image
              className='w-28 md:w-40 lg:w-46 xl:w-52'
              src={fallDetectionScreen}
              alt='fall detection screen'
              width={300}
              height={500}
            />
            <Image
              className='w-28 md:w-40 lg:w-46 xl:w-52'
              src={criticalScreen}
              alt='critical screen'
              width={300}
              height={500}
            />
          </div>
          <div className='flex flex-col md:p-8 gap-y-8  justify-between'>
            <h3 className='text-4xl md:text-5xl  font-SatoshiBold text-white text-center lg:text-left'>
              Fall Detection and Critical Heart Rate Alerts
            </h3>
            <p className='text-lg font-SatoshiMedium text-center lg:text-left sm:text-xl md:text-xl lg:text-2xl text-white'>
              Get notified and immediately connect with your elderly loved one
              the moment something concerning happened.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
