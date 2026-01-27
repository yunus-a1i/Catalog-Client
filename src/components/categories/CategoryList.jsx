import { cn } from '../../utils/cn';
import CategoryCard from './CategoryCard';
import Skeleton from '../common/Skeleton';
import EmptyState from '../common/EmptyState';
import { Tags } from 'lucide-react';

export default function CategoryList({ categories, isLoading, className }) {
  if (isLoading) {
    return (
      <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3]" />
        ))}
      </div>
    );
  }

  if (!categories?.length) {
    return (
      <EmptyState
        icon={Tags}
        title="No categories found"
        description="Categories will appear here once they are created."
      />
    );
  }

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {categories.map((category, index) => (
        <CategoryCard key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}