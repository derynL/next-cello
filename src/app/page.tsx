import cellosL from '@/cellos.png';
import cellosR from '@/cellos2.png';
import { paragraph } from './utilities/downloadPageData';
import Image from 'next/image';
import { Container } from './components/molecules/container/container';
import { Paragraph } from './components/atoms/paragraph/paragraph';

export default function Home() {
  return (
    <Container className='mt-20'>
      <div className='grid grid-cols-3 grid-rows-1 gap-3'>
        <div className='col-start-1 overflow-x-clip'>
          <Image src={cellosR} alt='Cellos' className='max-w-44 p-3' />
          <Image
            src={cellosL}
            alt='Cellos'
            className='lg:hidden max-w-44 p-3'
          />
        </div>
        <div className='col-start-2 col-span-2 lg:py-6 md:py-12 sm:pl-6'>
          <Paragraph content={paragraph.p1} />
          <Paragraph content={paragraph.p2} />
        </div>
      </div>
    </Container>
  );
}
