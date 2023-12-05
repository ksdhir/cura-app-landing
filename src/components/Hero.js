import Image from 'next/image';
import curaLogo from '../assets/cura_logo.svg';


export default function Hero() {
  return (
    <section
      id='hero'
      className='w-full px-6 sm:px-16 lg:px-28 pt-14 relative bg-white'>
      <div className='grid grid-cols-9 py-32 sm:py-48 lg:py-56 w-full md:gap-16 z-10 mx-auto max-w-7xl'>
        <div className='col-span-5 w-full flex flex-col lg:gap-y-10'>
          <h1 className=' w-full text-lg font-SatoshiBold tracking-tight text-curaBlack sm:text-[32px] md:text-[36px] lg:text-6xl text-left '>
            Stay connected with your elderly loved ones.
          </h1>
          <div className='mt-4 max-w-fit flex flex-col gap-2 lg:gap-4  justify-center items-start py-4 '>
            <div className='flex w-12 md:w-24 lg:w-44 self-center'>
              <Image src={curaLogo} alt='cura logo' width={200} height={100} />
            </div>

            <div className='text-sm  font-SatoshiMedium leading-6 sm:text-xl md:text-3xl lg:text-5xl text-primaryLight'>
              Connect + Cultivate + Care
            </div>
          </div>
        </div>
        <div className='col-span-4 w-full flex items-center justify-center z-20 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
          <Image
            className='object-contain w-full h-full relative ml-12'
            src="/screens/screen_double2.png"
            alt='main screen'
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* c in background */}
      <Image
        alt='c in background'
        src={"/decos/cone.png"}
        width={400}
        height={400}
        className='absolute right-0 top-40 hidden lg:block'
      />
    </section>
  );
}
