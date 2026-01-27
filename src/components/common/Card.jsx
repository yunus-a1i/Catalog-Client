import { cn } from '../../utils/cn';

export default function Card({
  children,
  className,
  padding = 'md',
  hover = false,
  ...props
}) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-surface-primary dark:bg-dark-surface-secondary',
        'border border-border-light dark:border-dark-border-light',
        'rounded-xl',
        paddings[padding],
        hover && 'transition-all duration-200 hover:shadow-soft hover:border-border-DEFAULT dark:hover:border-dark-border-DEFAULT',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}