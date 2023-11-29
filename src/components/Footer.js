import React, { useState } from 'react';
import Image from 'next/image';
import curaLogo from '../assets/cura_logo.svg';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Our Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <footer className='absolute px-6 sm:px-16 lg:px-28 inset-x-0 z-50'>
      <nav
        className='flex items-center w-full justify-between py-6'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Cura</span>
            <Image src={curaLogo} alt='cura logo' width={100} height={100} />
          </a>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-lg lg:text-xl font-SatoshiBold leading-6 text-primaryDark hover:text-secondaryDark focus:text-secondaryDark'>
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='#'
            className='rounded-md bg-primary px-6 py-2.5 text-center text-sm font-SatoshiBold text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark'>
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
              <Image src={curaLogo} alt='cura logo' width={100} height={100} />
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
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-SatoshiMedium leading-7 text-curaBlack hover:bg-gray-50'>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-SatoshiMedium leading-7 text-curaBlack hover:bg-gray-50'>
                  View Proposal
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </footer>
  );
}
