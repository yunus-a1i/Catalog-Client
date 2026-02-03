import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { cn } from '../../utils/cn';
import { formatPrice } from '../../utils/formatters';
// import { addItem, openCart } from '../../store/cartSlice';
// import { toast } from 'react-toastify';

export default function ProductCard({ product, index = 0 }) {
  // const dispatch = useDispatch();

  // const handleAddToCart = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   dispatch(
  //     addItem({
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       image: product.images?.[0] || product.image,
  //       quantity: 1,
  //     })
  //   );
  //   toast.success('Added to cart');
  //   dispatch(openCart());
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/products/${product.slug || product.id}`}
        className="group block"
      >
        {/* Image */}
        <div
          className={cn(
            'relative aspect-square overflow-hidden rounded-xl',
            'bg-surface-tertiary dark:bg-dark-surface-tertiary',
            'border border-border-light dark:border-dark-border-light',
            'transition-all duration-300',
            'group-hover:border-border-DEFAULT dark:group-hover:border-dark-border-DEFAULT'
          )}
        >
          {product.images?.length && <img
            src={product.images?.[0].url || product.image || '/placeholder.jpg'}
            alt={product.name}
            className={cn(
              'w-full h-full object-cover',
              'transition-transform duration-500 ease-smooth',
              'group-hover:scale-105'
            )}
          />}

          {/* Quick Actions */}
          <div
            className={cn(
              'absolute inset-0 flex items-end justify-center p-4',
              'bg-gradient-to-t from-black/40 via-transparent to-transparent',
              'opacity-0 group-hover:opacity-100',
              'transition-opacity duration-300'
            )}
          >
            {/* <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5',
                  'bg-white text-zinc-900',
                  'rounded-full text-sm font-medium',
                  'shadow-elevated',
                  'transition-colors duration-200',
                  'hover:bg-zinc-100'
                )}
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className={cn(
                  'p-2.5 bg-white text-zinc-900 rounded-full',
                  'shadow-elevated',
                  'transition-colors duration-200',
                  'hover:bg-zinc-100'
                )}
              >
                <Heart className="w-4 h-4" />
              </motion.button>
            </div> */}
          </div>

          {/* Badges */}
          {product.isNew && (
            <span
              className={cn(
                'absolute top-3 left-3',
                'px-2.5 py-1 text-xs font-medium',
                'bg-zinc-900 text-white',
                'rounded-full'
              )}
            >
              New
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 space-y-1">
          {product.category && (
            <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wider">
              {product.category.name || product.category}
            </p>
          )}
          <h3
            className={cn(
              'text-sm font-medium text-text-primary dark:text-dark-text-primary',
              'group-hover:text-text-secondary dark:group-hover:text-dark-text-secondary',
              'transition-colors duration-200',
              'line-clamp-2'
            )}
          >
            {product.name}
          </h3>
          <p className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}