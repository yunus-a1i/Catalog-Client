import { formatPrice } from '../../utils/formatters';
import { cn } from '../../utils/cn';

export default function CartSummary({ total }) {
  const shipping = total > 100 ? 0 : 9.99;
  const finalTotal = total + shipping;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-text-tertiary dark:text-dark-text-tertiary">Subtotal</span>
        <span className="text-text-primary dark:text-dark-text-primary font-medium">
          {formatPrice(total)}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-text-tertiary dark:text-dark-text-tertiary">Shipping</span>
        <span className="text-text-primary dark:text-dark-text-primary font-medium">
          {shipping === 0 ? 'Free' : formatPrice(shipping)}
        </span>
      </div>
      <div
        className={cn(
          'flex justify-between pt-3',
          'border-t border-border-light dark:border-dark-border-light'
        )}
      >
        <span className="text-base font-semibold text-text-primary dark:text-dark-text-primary">
          Total
        </span>
        <span className="text-base font-semibold text-text-primary dark:text-dark-text-primary">
          {formatPrice(finalTotal)}
        </span>
      </div>
      {shipping > 0 && (
        <p className="text-xs text-text-muted dark:text-dark-text-muted text-center">
          Free shipping on orders over $100
        </p>
      )}
    </div>
  );
}