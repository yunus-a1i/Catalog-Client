import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function CategoryCard({ category, index = 0 }) {

  console.log(category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/categories/${category.slug || category.id}`}
        className="group block"
      >
        <div
          className={cn(
            'relative aspect-[4/3] overflow-hidden rounded-xl',
            'bg-surface-tertiary dark:bg-dark-surface-tertiary',
            'border border-border-light dark:border-dark-border-light',
            'transition-all duration-300',
            'group-hover:border-border-DEFAULT dark:group-hover:border-dark-border-DEFAULT'
          )}
        >
          {category.image_url ? (
            <img
              src={category.image_url}
              alt={category.name}
              className={cn(
                'w-full h-full object-cover',
                'transition-transform duration-500 ease-smooth',
                'group-hover:scale-105'
              )}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl font-bold text-text-muted dark:text-dark-text-muted">
                {category.name?.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div
            className={cn(
              'absolute inset-0',
              'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
              'flex items-end p-6'
            )}
          >
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {category.name}
                </h3>
                {category.productCount !== undefined && (
                  <p className="text-sm text-white/80 mt-0.5">
                    {category.productCount} products
                  </p>
                )}
              </div>
              <div
                className={cn(
                  'p-2 rounded-full bg-white/20 backdrop-blur-sm',
                  'text-white',
                  'transition-transform duration-300',
                  'group-hover:translate-x-1'
                )}
              >
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}