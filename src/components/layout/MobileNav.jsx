import { Link, useLocation } from 'react-router';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '../../utils/cn';
import { openCart, selectCartCount } from '../../store/cartSlice';
import { setSearchOpen } from '../../store/uiSlice';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Search', action: 'search', icon: Search },
  { label: 'Cart', action: 'cart', icon: ShoppingBag },
  { label: 'Account', href: '/login', icon: User },
];

export default function MobileNav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleAction = (action) => {
    if (action === 'cart') {
      dispatch(openCart());
    } else if (action === 'search') {
      dispatch(setSearchOpen(true));
    }
  };

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40',
        'bg-surface-primary/90 dark:bg-dark-surface-primary/90',
        'backdrop-blur-xl',
        'border-t border-border-light dark:border-dark-border-light',
        'md:hidden',
        'safe-area-inset-bottom'
      )}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.href === location.pathname;

          if (item.action) {
            return (
              <button
                key={item.label}
                onClick={() => handleAction(item.action)}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 px-4 py-2',
                  'text-text-tertiary dark:text-dark-text-tertiary',
                  'transition-colors duration-200',
                  'relative'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
                {item.action === 'cart' && cartCount > 0 && (
                  <span
                    className={cn(
                      'absolute top-1 right-2',
                      'min-w-[16px] h-4 px-1',
                      'bg-zinc-900 dark:bg-zinc-100',
                      'text-white dark:text-zinc-900',
                      'text-[9px] font-semibold',
                      'rounded-full',
                      'flex items-center justify-center'
                    )}
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 px-4 py-2',
                'transition-colors duration-200',
                isActive
                  ? 'text-text-primary dark:text-dark-text-primary'
                  : 'text-text-tertiary dark:text-dark-text-tertiary'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}