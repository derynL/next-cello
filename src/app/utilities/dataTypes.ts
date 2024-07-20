import { ReactElement, ReactNode } from 'react';

export interface UserGuideProps {
  id: string;
  heading: string;
  data: ContentProps[];
}
export interface ContentProps {
  cid: string;
  content: string;
}
export interface AboutProps {
  id: string;
  heading: string;
  content: string[];
}
export interface TextProps {
  content: string | string[];
}
export interface SkyButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href: string;
  isLink: boolean;
  disabled?: boolean;
}
export interface CustomInputProps {
  labelType: string;
  labelName: string;
  inputDefault?: string;
  inputId: string;
  inputName: string;
  inputType: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface NavLinkProps {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{
    className?: string;
  }>;
}
