import { TextProps } from '@/app/utilities/dataTypes';
export const Paragraph = ({ content }: TextProps) => {
  return (
    <p className='text-lg text-slate-800 dark:text-gray-400 mb-4'>{content}</p>
  );
};
