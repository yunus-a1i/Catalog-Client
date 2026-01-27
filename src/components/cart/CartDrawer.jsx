import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { cn } from '../../utils/cn';
import { closeCart, selectCartItems, selectCartTotal } from '../../store/cartSlice';
import { useScrollLock } from '../../hooks/useScrollLock';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import Button from '../common/Button';
import EmptyState from '../common/EmptyState';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.cart);
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  useScrollLock(isOpen);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => dispatch(closeCart())}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'fixed right-0 top-0 z-50 h-full w-full max-w-md',
              'bg-surface-primary dark:bg-dark-surface-primary',
              'border-l border-border-light dark:border-dark-border-light',
              'flex flex-col'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border-light dark:border-dark-border-light">
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Shopping Cart
              </h2>
              <button
                onClick={() => dispatch(closeCart())}
                className={cn(
                  'p-2 -mr-2 rounded-full',
                  'text-text-tertiary hover:text-text-primary',
                  'dark:text-dark-text-tertiary dark:hover:text-dark-text-primary',
                  'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                  'transition-colors duration-200'
                )}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <EmptyState
                  icon={ShoppingBag}
                  title="Your cart is empty"
                  description="Add some items to get started"
                  action={{
                    label: 'Continue Shopping',
                    onClick: () => dispatch(closeCart()),
                  }}
                />
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border-light dark:border-dark-border-light p-6 space-y-4">
                <CartSummary total={total} />
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => dispatch(closeCart())}
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}