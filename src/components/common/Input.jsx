import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary dark:text-dark-text-tertiary">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'w-full h-10 px-4 text-sm',
              'bg-surface-primary dark:bg-dark-surface-primary',
              'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
              'rounded-xl',
              'text-text-primary dark:text-dark-text-primary',
              'placeholder:text-text-muted dark:placeholder:text-dark-text-muted',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent',
              'dark:focus:ring-zinc-100',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary dark:text-dark-text-tertiary">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              'mt-1.5 text-xs',
              error
                ? 'text-red-500'
                : 'text-text-tertiary dark:text-dark-text-tertiary'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;