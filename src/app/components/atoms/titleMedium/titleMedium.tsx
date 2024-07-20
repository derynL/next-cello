import { TextProps } from '@/app/utilities/dataTypes';

export const TitleMedium = ({ content }: TextProps) => {
  return (
    <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2'>
      {content}
    </h5>
  );
};
