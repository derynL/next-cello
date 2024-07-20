import { CustomInputProps } from '@/app/utilities/dataTypes';

export const Input = (props: CustomInputProps) => {
  return (
    <div className='p-5'>
      <label
        htmlFor={props.labelType}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {props.labelName}
      </label>
      <div className='mt-2'>
        <input
          id={props.inputId}
          name={props.inputName}
          type={props.inputType}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  );
};
