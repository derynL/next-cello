'use client';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import css from '@/styles/cello.module.css';
import { HEADER } from '@/testUtils/testIds/components';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Listen', href: '/listen' },
  { name: 'Contact', href: '/contact' },
];

export function CelloHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <nav
        className='flex p-6 lg:px-8 w-full items-center justify-between max-w-7xl mx-auto'
        aria-label='Global'
        aria-hidden='true'
      >
        <div className='flex'>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-lg font-semibold leading-6 text-gray-900 hover:text-orange-600 focus:text-blue-600'
                data-testid={HEADER.LINK}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-1'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>
          <div className='mt-6 space-y-2'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
