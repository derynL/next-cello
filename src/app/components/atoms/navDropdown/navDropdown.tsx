import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { NavLinkProps } from '@/app/utilities/dataTypes';
import Link from 'next/link';

interface NavDropdownProps {
  menuButton: string;
  menuItem: NavLinkProps[];
}

export const NavDropdown = (menuProps: NavDropdownProps) => {
  return (
    <Popover className='relative'>
      <PopoverButton className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
        <span>{menuProps.menuButton}</span>
        <ChevronDownIcon aria-hidden='true' className='h-5 w-5' />
      </PopoverButton>
      <PopoverPanel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
        <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
          <div className='p-4'>
            {menuProps.menuItem.map((item) => (
              <div key={item.href}>
                <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'></div>
                <Link
                  className='block data-[focus]:bg-blue-100'
                  href={item.href}
                >
                  {item.name}
                  <p className='mt-1 text-gray-600'>{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
