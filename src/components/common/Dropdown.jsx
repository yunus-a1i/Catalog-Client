import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  const selected = options.find((opt) => opt.value === value);

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full h-10 px-4 text-left text-sm',
          'bg-surface-primary dark:bg-dark-surface-primary',
          'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
          'rounded-xl',
          'flex items-center justify-between gap-2',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100',
          isOpen && 'ring-2 ring-zinc-900 dark:ring-zinc-100'
        )}
      >
        <span
          className={cn(
            selected
              ? 'text-text-primary dark:text-dark-text-primary'
              : 'text-text-muted dark:text-dark-text-muted'
          )}
        >
          {selected?.label || placeholder}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-text-tertiary dark:text-dark-text-tertiary',
            'transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute z-50 w-full mt-1',
              'bg-surface-primary dark:bg-dark-surface-secondary',
              'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
              'rounded-xl shadow-elevated',
              'py-1 overflow-hidden'
            )}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm',
                  'flex items-center justify-between',
                  'transition-colors duration-150',
                  option.value === value
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-text-primary dark:text-dark-text-primary'
                    : 'text-text-secondary dark:text-dark-text-secondary hover:bg-zinc-50 dark:hover:bg-zinc-800'
                )}
              >
                {option.label}
                {option.value === value && (
                  <Check className="w-4 h-4" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}