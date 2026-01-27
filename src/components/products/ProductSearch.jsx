import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { cn } from '../../utils/cn';
import { setSearchOpen } from '../../store/uiSlice';
import { useDebounce } from '../../hooks/useDebounce';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useProductsQuery } from '../../api/queries/products';
import Spinner from '../common/Spinner';
import { formatPrice } from '../../utils/formatters';

export default function SearchModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchOpen } = useSelector((state) => state.ui);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useScrollLock(searchOpen);

  const { data: products, isLoading } = useProductsQuery(
    { search: debouncedQuery, limit: 6 },
    { enabled: debouncedQuery.length >= 2 }
  );

  const handleClose = useCallback(() => {
    dispatch(setSearchOpen(false));
    setQuery('');
  }, [dispatch]);

  const handleSelect = (product) => {
    navigate(`/products/${product.slug || product.id}`);
    handleClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(setSearchOpen(true));
      }
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, handleClose]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {searchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-x-0 top-0 z-50 p-4 sm:p-6 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'mx-auto max-w-2xl overflow-hidden',
                'bg-surface-primary dark:bg-dark-surface-secondary',
                'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
                'rounded-2xl shadow-elevated'
              )}
            >
              {/* Search Input */}
              <div className="relative flex items-center border-b border-border-light dark:border-dark-border-light">
                <Search className="absolute left-4 w-5 h-5 text-text-tertiary dark:text-dark-text-tertiary" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className={cn(
                    'w-full h-14 pl-12 pr-12',
                    'bg-transparent',
                    'text-text-primary dark:text-dark-text-primary',
                    'placeholder:text-text-muted dark:placeholder:text-dark-text-muted',
                    'focus:outline-none'
                  )}
                  autoFocus
                />
                <button
                  onClick={handleClose}
                  className="absolute right-4 p-1 rounded-md text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading && (
                  <div className="flex items-center justify-center py-12">
                    <Spinner />
                  </div>
                )}

                {!isLoading && debouncedQuery.length >= 2 && !products?.length && (
                  <div className="py-12 text-center">
                    <p className="text-text-tertiary dark:text-dark-text-tertiary">
                      No products found for "{debouncedQuery}"
                    </p>
                  </div>
                )}

                {!isLoading && products?.length > 0 && (
                  <ul className="py-2">
                    {products.map((product) => (
                      <li key={product.id}>
                        <button
                          onClick={() => handleSelect(product)}
                          className={cn(
                            'w-full flex items-center gap-4 px-4 py-3',
                            'hover:bg-zinc-50 dark:hover:bg-zinc-800',
                            'transition-colors duration-150',
                            'text-left'
                          )}
                        >
                          <img
                            src={product.images?.[0] || product.image || '/placeholder.jpg'}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-surface-tertiary dark:bg-dark-surface-tertiary"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-muted dark:text-dark-text-muted" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {query.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                      Start typing to search products
                    </p>
                    <p className="text-xs text-text-muted dark:text-dark-text-muted mt-2">
                      Press{' '}
                      <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-xs">
                        ⌘K
                      </kbd>{' '}
                      to open search anytime
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}