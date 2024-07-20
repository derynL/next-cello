'use client';
import { AboutProps } from '@/app/utilities/dataTypes';
import { TitleGradient } from '@/components/atoms/titleGradient/titleGradient';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

interface AboutListProps {
  aboutData: AboutProps[];
}
export default function AboutList({ aboutData }: AboutListProps) {
  return (
    <div className='bg-gray-50 h-full'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <TitleGradient content='About' />
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {aboutData.map((data: AboutProps) => (
              <Disclosure as='div' key={data.id}>
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className='flex w-full items-start justify-between text-left text-gray-900'>
                        <span className='text-base font-semibold leading-7'>
                          {data.heading}
                        </span>
                        <span className='ml-6 flex h-12 items-center'>
                          {open ? (
                            <MinusIcon className='h-4 w-4' aria-hidden='true' />
                          ) : (
                            <PlusIcon className='h-4 w-4' aria-hidden='true' />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as='dd' className='mt-2 pr-12'>
                      <ul className='text-base text-justify leading-7 text-gray-700'>
                        {data.content.map((content, id) => {
                          return <li key={id}>{content}</li>;
                        })}
                      </ul>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
