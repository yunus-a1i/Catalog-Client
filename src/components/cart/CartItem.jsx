import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { cn } from '../../utils/cn';
import { formatPrice } from '../../utils/formatters';
import { updateQuantity, removeItem } from '../../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };
  console.log(item)

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div
        className={cn(
          'w-20 h-20 shrink-0 rounded-xl overflow-hidden',
          'bg-surface-tertiary dark:bg-dark-surface-tertiary',
          'border border-border-light dark:border-dark-border-light'
        )}
      >
        <img
          src={item.image.url || '/placeholder.jpg'}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-text-primary dark:text-dark-text-primary line-clamp-2">
          {item.name}
        </h4>
        <p className="mt-1 text-sm font-semibold text-text-primary dark:text-dark-text-primary">
          {formatPrice(item.price)}
        </p>

        {/* Quantity */}
        <div className="flex items-center justify-between mt-3">
          <div
            className={cn(
              'flex items-center',
              'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
              'rounded-full'
            )}
          >
            <button
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              className={cn(
                'p-1.5',
                'text-text-tertiary dark:text-dark-text-tertiary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'transition-colors duration-200'
              )}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-xs font-medium text-text-primary dark:text-dark-text-primary">
              {item.quantity}
            </span>
            <button
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              className={cn(
                'p-1.5',
                'text-text-tertiary dark:text-dark-text-tertiary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'transition-colors duration-200'
              )}
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className={cn(
              'p-2 rounded-full',
              'text-text-tertiary dark:text-dark-text-tertiary',
              'hover:text-red-500 hover:bg-red-50',
              'dark:hover:bg-red-900/20',
              'transition-colors duration-200'
            )}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}