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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl'>
      <nav
        className='flex px-4 items-center w-full justify-between py-6'
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
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-curaBlack '
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-10 w-10' aria-hidden='true' />
          </button>
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
            href='/cura-proposal.pdf'
            download='Cura_ProjectProposal.pdf'
            className='rounded-md text-sm lg:text-lg bg-primaryDark px-6 py-2.5 lg:px-12 text-center font-SatoshiBold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary animate-pulse'>
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
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-SatoshiMedium leading-7 text-curaBlack hover:bg-primaryLighter'
                    onClick={() => setMobileMenuOpen(false)} // Closing the mobile menu when any link is clicked
                  >
                    {item.name}
                    {/* add onclick to close dialogue */}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='/cura-proposal.pdf'
                  download='Cura_ProjectProposal.pdf'
                  className='-mx-3  block rounded-lg px-3 py-2.5 text-base font-SatoshiMedium leading-7 text-curaBlack hover:bg-primaryLighter'>
                  View Proposal
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
