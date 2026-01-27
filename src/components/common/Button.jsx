import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import Spinner from './Spinner';

const variants = {
  primary: `
    bg-zinc-900 text-white 
    hover:bg-zinc-800 
    dark:bg-zinc-100 dark:text-zinc-900 
    dark:hover:bg-zinc-200
  `,
  secondary: `
    bg-zinc-100 text-zinc-900 
    hover:bg-zinc-200 
    dark:bg-zinc-800 dark:text-zinc-100 
    dark:hover:bg-zinc-700
  `,
  outline: `
    border border-border-DEFAULT text-text-primary 
    hover:bg-zinc-50 
    dark:border-dark-border-DEFAULT dark:text-dark-text-primary 
    dark:hover:bg-zinc-800
  `,
  ghost: `
    text-text-primary 
    hover:bg-zinc-100 
    dark:text-dark-text-primary 
    dark:hover:bg-zinc-800
  `,
  danger: `
    bg-red-600 text-white 
    hover:bg-red-700
  `,
};

const sizes = {
  xs: 'h-7 px-2.5 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-base gap-2',
  xl: 'h-12 px-6 text-base gap-2.5',
};

const Button = forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium',
          'rounded-full',
          'transition-all duration-200 ease-smooth',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2',
          'dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-zinc-900',
          'disabled:opacity-50 disabled:pointer-events-none',
          'active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Spinner size="sm" className="mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;