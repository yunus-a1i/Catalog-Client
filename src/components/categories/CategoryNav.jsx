import { Link, useLocation } from 'react-router';
import { cn } from '../../utils/cn';
import { useCategoriesQuery } from '../../api/queries/categories';
import Skeleton from '../common/Skeleton';

export default function CategoryNav({ className }) {
  const location = useLocation();
  const { data: categories, isLoading } = useCategoriesQuery();

  if (isLoading) {
    return (
      <div className={cn('flex gap-2 overflow-x-auto pb-2', className)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full shrink-0" />
        ))}
      </div>
    );
  }

  return (
    <nav className={cn('flex gap-2 overflow-x-auto pb-2', className)}>
      <Link
        to="/products"
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-full shrink-0',
          'transition-all duration-200',
          location.pathname === '/products'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'bg-zinc-100 text-text-secondary hover:bg-zinc-200 dark:bg-zinc-800 dark:text-dark-text-secondary dark:hover:bg-zinc-700'
        )}
      >
        All
      </Link>
      {categories?.map((category) => {
        const isActive = location.pathname === `/categories/${category.slug || category.id}`;
        return (
          <Link
            key={category.id}
            to={`/categories/${category.slug || category.id}`}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full shrink-0',
              'transition-all duration-200',
              isActive
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-text-secondary hover:bg-zinc-200 dark:bg-zinc-800 dark:text-dark-text-secondary dark:hover:bg-zinc-700'
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}