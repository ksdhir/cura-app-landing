import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import curaLogo from '../assets/cura_logo.svg';

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Cura</span>
              <Image src={curaLogo} alt='cura logo' width={100} height={100} />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-lg font-SatoshiBold leading-6 text-primaryDark hover:text-secondaryDark focus:text-secondaryDark'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='rounded-md  bg-primaryDark px-6 py-2.5 text-xl font-sans text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark'>
              View Proposal
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Cura</span>
                <Image
                  src={curaLogo}
                  alt='cura logo'
                  width={100}
                  height={100}
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-SatoshiMedium leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-SatoshiMedium leading-7 text-gray-900 hover:bg-gray-50'>
                    View Proposal
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'></div>
        <div className='mx-auto max-w-[1400px] py-32 sm:py-48 lg:py-56 flex flex-col md:flex-row'>
          <div className='lg:max-w-[680px]'>
            <h1 className='text-4xl font-SatoshiBlack tracking-tight text-curaBlack sm:text-6xl text-left'>
              Stay connected with your elderly loved ones.
            </h1>
            <div className='mt-10 flex flex-col items-center justify-center gap-y-3'>
              <div className='flex items-center justify-center w-16 sm:w-full'>
                <Image
                  src={curaLogo}
                  alt='cura logo'
                  width={200}
                  height={100}
                />
              </div>

              <div className='text-md font-SatoshiMedium leading-6 sm:text-2xl text-primaryDark'>
                Connect + Cultivate + Care
              </div>
            </div>
          </div>
          <div className='flex flex-1 items-center justify-center border'>
            {/* //placeholder for hero image */}
            <div className='flex '>
              <Image src={curaLogo} alt='cura logo' width={500} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
