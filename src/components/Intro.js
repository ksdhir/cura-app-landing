import twowatch from '../assets/watches/watchboth.png';
import Image from 'next/image';

export default function Intro() {
  return (
   <div className='bg-primaryLightest'>
     <div className='flex px-6 py-32 justify-center items-center  font-sans gap-6  mx-auto max-w-7xl'>
      <div className='items-center justify-center w-full hidden lg:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
        <Image
          className=''
          src={twowatch}
          alt='two watches'
          width={300}
          height={500}
        />
      </div>

      <p className='  md:p-8 text-lg sm:text-xl text-center md:text-left md:text-2xl lg:text-3xl text-primaryDark'>
        Cura helps anyone monitor the health of their elderly loved ones by
        connecting their smart watch with a care person&apos;s mobile device for
        constant, real-time health tracking such as heart rate, location, and
        fall detection, to promote peace of mind and connectedness.
      </p>
    </div>
   </div>
  );
}
