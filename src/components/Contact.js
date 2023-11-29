import { useState } from 'react';
import Image from 'next/image';
import adPhoto from '../assets/curause.png';

const curaUse = require('../assets/curause.png');

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className='flex flex-col '>
      <div className='bg-white py-24 sm:py-32 '>
        <h2 className=' flex flex-1 w-full py-6 pb-20 items-center justify-center text-[48px] lg:text-7xl  font-SatoshiBlack text-primaryDark '>
          Contact Us
        </h2>
        <div className='grid md:grid-cols-2 '>
          <div>
            <Image
              className='object-cover w-full h-full hidden md:block '
              src={adPhoto}
              alt='main screen'
              width={800}
              height={800}
            />
          </div>
          <form
            action='#'
            method='POST'
            className='mx-auto  px-6 w-full md:my-16  max-w-2xl'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-SatoshiBold leading-6 text-primaryDark'>
                  Name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full font-SatoshiMedium rounded-md border-0 px-3.5 py-2 text-primaryDark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-primaryDark'>
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full font-SatoshiMedium rounded-md border-0 px-3.5 py-2 text-primaryDark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryDark sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-primaryDark'>
                  Message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='block w-full rounded-md font-SatoshiMedium border-0 px-3.5 py-2 text-primaryDark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <butto
                type='submit'
                className='block w-full rounded-md  bg-primaryDark px-3.5 py-2.5 text-center text-sm font-SatoshiBold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
                Submit
              </butto>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
