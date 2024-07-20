import { TextProps } from '@/app/utilities/dataTypes';
import css from '@/styles/cello.module.css';
export const TitleGradient = ({ content }: TextProps) => {
  return <div className={css.titleGradient}>{content}</div>;
};
