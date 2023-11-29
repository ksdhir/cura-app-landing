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
    <footer className='px-6 sm:px-16 inset-x-0 z-50'>
      <nav
        className='flex items-center w-full justify-between py-6'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Cura</span>
            <Image src={curaLogo} alt='cura logo' width={100} height={100} />
          </a>
        </div>

        <div className='lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-lg lg:text-xl font-SatoshiBold leading-6 text-primaryDark hover:text-secondaryDark focus:text-secondaryDark'>
              {item.name}
            </a>
          ))}
        </div>
        <div className='lg:flex lg:flex-1 lg:justify-end text-xs'>
          Copyrigth © 2023 Cura
        </div>
      </nav>
    </footer>
  );
}
