interface IconProps {
  icon: React.ComponentType<{
    className?: string;
  }>;
}
export const icon = (props: IconProps) => {
  return (
    <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
      <props.icon
        aria-hidden='true'
        className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
      ></props.icon>
    </div>
  );
};
