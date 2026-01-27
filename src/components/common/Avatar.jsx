import { cn } from '../../utils/cn';

const sizes = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
};

export default function Avatar({
  src,
  alt,
  name,
  size = 'md',
  className,
}) {
  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={cn(
          'rounded-full object-cover',
          'bg-zinc-100 dark:bg-zinc-800',
          sizes[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center',
        'bg-zinc-200 dark:bg-zinc-700',
        'text-text-secondary dark:text-dark-text-secondary font-medium',
        sizes[size],
        className
      )}
    >
      {initials || '?'}
    </div>
  );
}