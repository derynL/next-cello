import Image, { StaticImageData } from 'next/image';
import { TitleMedium } from '../../atoms/titleMedium/titleMedium';
import Link from 'next/link';

export interface ContentCardProps {
  icon: StaticImageData;
  title: string;
  info?: string;
}
export const ContentCard = (props: ContentCardProps) => {
  return (
    <div className='mx-4 my-2 w-44 md:w-52 lg:w-60 xl:72'>
      <div className='rounded-2xl bg-gray-50 py-6 text-center ring-2 ring-inset ring-gray-900/5 flex flex-col lg:py-8 items-center justify-center'>
        <Link href='/' className='justify-items-center'>
          <Image
            src={props.icon}
            className='mx-4 w-10 pb-2'
            alt='Music image'
          />
        </Link>
        <TitleMedium content={props.title} />

        <button type='button'>Submit</button>
      </div>
    </div>
  );
};
