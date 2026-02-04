import { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
 type DirectionType = 'down' | 'up' | 'left' | 'right';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destroy';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  iconDirection?: DirectionType,
  withIcon: boolean,
}

export default function Button({
  children,
  variant = 'primary',
  className,
    iconDirection = 'down',
    withIcon = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 pl-(--space-200) pr-(--space-200) h-(--space-500) inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-gray-900 font-bold text-white',
    secondary: 'bg-beige-100 text-gray-900 hover:bg-white outline outline-1 outline-(--grey-300) ',
    tertiary: 'bg-transparent text-gray-500 hover:text-grey-900 ',
    destroy: 'bg-red text-white font-bold hover:opacity-20 focus:ring-gray-500',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className || ''}`.trim();

  const src=`/assets/images/icon-caret-${iconDirection}.svg`;

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {withIcon ? (
        <span className="inline-flex items-center gap-2">
          {children}
          <span>
            <Image src={src} width={16} height={16} alt={`Caret icon ${iconDirection}`} className='h-(--space-200)' />
        </span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}