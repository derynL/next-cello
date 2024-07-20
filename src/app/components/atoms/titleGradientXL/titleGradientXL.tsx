import { TextProps } from '@/app/utilities/dataTypes';
import css from '@/styles/cello.module.css';

export const TitleGradientXL = ({ content }: TextProps) => {
  return (
    <div className={css.titleGradientXL}>
      <h1>{content}</h1>
    </div>
  );
};
