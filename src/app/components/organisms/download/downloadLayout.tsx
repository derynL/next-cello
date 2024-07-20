import { Paragraph } from '@/components/atoms/paragraph/paragraph';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface DownloadProps {
  image1: StaticImageData;
  paragraph1: string;
  paragraph2: string;
  image2: StaticImageData;
}
export const DownloadLayout = (props: DownloadProps) => {
  return (
    <div>
      <div className='flex-row self-center w-8/12 mx-20 sm:flex mt-14'>
        <div className='align-middle mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
          <Image
            src={props.image1}
            alt='Cellos'
            className='sm:w-44 md:w-48 lg:w-60'
          />
        </div>
        <div className='text-justify mx-6'>
          <Paragraph content={props.paragraph1} />
          <Paragraph content={props.paragraph2} />
        </div>
        <div className='align-middle mb-4 flex-shrink-0 sm:mb-0 sm:mr-4'>
          <Image
            src={props.image2}
            alt='Cellos'
            className='sm:w-44 md:w-48 lg:w-60'
          />
        </div>
      </div>
    </div>
  );
};
