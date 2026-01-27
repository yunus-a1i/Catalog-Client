import { cn } from '../../utils/cn';
import Button from './Button';

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-16 px-4',
        className
      )}
    >
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-text-tertiary dark:text-dark-text-tertiary" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary max-w-sm mb-6">
          {description}
        </p>
      )}
      {action && (
        <Button onClick={action.onClick} variant="primary">
          {action.label}
        </Button>
      )}
    </div>
  );
}